Ext.Loader.setConfig({
	enabled : true
});

Ext.application({

	name: 'Touch2Demo',

	controllers: [
		'Main'
	],

	views: [
		'ContatosList',
		'ContatosForm',
		'ColetasForm',
		'ColetasList'


	],

	models: [
		'Contato',
		'Coleta'
	],

	
	stores: [
		'Contatos',
		'Coletas'
	],

	viewport:{
		layout:{
			type: 'card',
			animation: {
				type: 'slide',
				duration: 1000	
			}
		}
	},

	launch: function(){	
	}
});