export const filterTypes = new Map();

filterTypes.set('launch_year', {
  label: 'Launch Year',
  values: Array.from(Array(15).keys(), (x) => (x + 2006).toString()),
});
filterTypes.set('launch_success', {
  label: 'Successful Launch',
  values: Array.of('true', 'false'),
});
filterTypes.set('land_success', {
  label: 'Successful Landing',
  values: Array.of('true', 'false'),
});
filterTypes.set('clear_all', { label: 'Clear All', values: Array.of('Clear') });
