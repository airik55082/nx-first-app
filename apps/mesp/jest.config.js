module.exports = {
  name: 'mesp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mesp/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
