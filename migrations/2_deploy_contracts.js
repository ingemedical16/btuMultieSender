const TutorialToken = artifacts.require("BTU");

module.exports = function(deployer) {
  deployer.deploy(TutorialToken);
};
