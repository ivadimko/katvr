const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.svg?sprite', '.svg'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
