const fs = require('fs');
const path = require('path');

module.exports = async (context) => {
  const architectures = ['darwin-x64', 'darwin-arm64'];

  architectures.forEach((arch) => {
    const resetFile = path.join(context.appOutDir, 'libs', arch, 'reset');
    const uniproxyFile = path.join(context.appOutDir, 'libs', arch, 'uniproxy');

    try {
      // 检查文件是否存在再设置权限
      if (fs.existsSync(resetFile)) {
        fs.chmodSync(resetFile, '755');
        console.log(`权限已成功设置：${resetFile}`);
      } else {
        console.warn(`文件不存在：${resetFile}`);
      }

      if (fs.existsSync(uniproxyFile)) {
        fs.chmodSync(uniproxyFile, '755');
        console.log(`权限已成功设置：${uniproxyFile}`);
      } else {
        console.warn(`文件不存在：${uniproxyFile}`);
      }
    } catch (error) {
      console.error(`设置权限失败 (${arch})`, error);
    }
  });
};
