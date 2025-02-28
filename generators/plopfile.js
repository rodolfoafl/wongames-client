export default function (plop) {
  // create your generators here
  plop.setGenerator('components', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
