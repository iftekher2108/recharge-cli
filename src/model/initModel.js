const createModel = require("./createModel")
module.exports = (args) => {
    const name = args.name;
    const module = args.module; // Default to 'default' if not provided

    if ((!module || module.trim() === '') && (!name || name.trim() === '')) {
      console.log('❗ Error: --name & --module are required (e.g., make:model --name=Example --module=default)');
      return;
    }

    createModel(name, module);
  };