import '../app';

describe('LandingController', () => {
  // Load the application
  beforeEach(angular.mock.module('myAngularApp'));

  let ctrl;

  beforeEach(angular.mock.inject((_$componentController_) => {
    const $componentController = _$componentController_;
    ctrl = $componentController('landing');
  }));

  it('should be defined', () => {
    expect(ctrl).toBeDefined();
  });

});
