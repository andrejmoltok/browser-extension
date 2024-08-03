import chai from 'chai';
import changeExtensionTooltip from '../../src/utils/changeExtensionTooltip';

const expect = chai.expect;

jest.mock('webextension-polyfill', () => {
  return {
    runtime: {
      getManifest: () => {
        return { version: 'test-version' };
      },
    },
  };
});

describe('changeExtensionTooltip', function () {
  it('should be a function', function () {
    expect(changeExtensionTooltip).to.be.a('function');
  });

  // it('should change the extension tooltip', function() {
  //     changeExtensionTooltip('Code Climbers');
  //     expect(chrome.browserAction.setTitle).toHaveBeenCalledWith({title: 'Code Climbers'});
  //     sinon.assert.calledWithMatch(chrome.browserAction.setTitle, {title: 'Code Climbers'});
  // });
});
