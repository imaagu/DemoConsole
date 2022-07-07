const _Header = [
  { value: 'id', name: 'Id', haveOrder: true },
  {
    value: 'created_date_time',
    name: 'Creation Date',
    haveOrder: true,
  },
  {
    value: 'modified_date_time',
    name: 'Modified Date',
    haveOrder: false,
  },
  {
    value: 'external_id',
    name: 'External Id',
    haveOrder: false,
  },
  {
    value: 'league_name',
    name: 'League',
    haveOrder: false,
  },
  {
    value: 'description',
    name: 'Description',
    haveOrder: false,
  },

  {
    value: 'game',
    name: 'Game',
    haveOrder: true,
  },

  {
    value: 'is_playable',
    name: 'Playable',
    haveOrder: false,
  },
  {
    value: '',
    name: '',
    haveOrder: false,
  },
];

const _playable_option = [
  { id: 0, value: '', name: 'Playable' },
  { id: 1, value: 'true', name: 'Yes' },
  { id: 2, value: 'false', name: 'No' },
];

const _game_option = [{ id: 0, value: '', name: 'Game' }];

export { _Header, _game_option, _playable_option };
