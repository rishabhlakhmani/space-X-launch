import { IMission } from '../models/mission.interface';

export const responseMapper = (missions): IMission[] => {
  return missions.map((response) => {
    return {
      mission_name: response.mission_name,
      flight_number: response.flight_number,
      mission_id: response.mission_id,
      imgUrl: response.links.mission_patch_small,
      launch_year: response.launch_year,
      launch_success: response.launch_success?.toString() || 'false',
      land_success: figureOutLandSuccess(
        response.rocket.first_stage.cores[0]
      ).toString(),
    };
  });
};

const figureOutLandSuccess = (core): boolean => {
  return core.landing_intent ? (core.land_success ? true : false) : true;
};
