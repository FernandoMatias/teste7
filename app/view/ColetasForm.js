Ext.define('Touch2Demo.view.ColetasForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.coletasform',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		itemId: 'toolbarFormColeta',
		title: 'Coleta de Pneus',
		items: [
		    {
			xtype: 'button',
			ui: 'back',
			action: 'voltarColetasList',
			text: 'Voltar'
		    }

		]
	    },
	    {
		xtype: 'container',
		height: 150,
		items: [
		    {
			xtype: 'fieldset',
			top: 5,
			items: [
			    {
				xtype: 'textfield',
				name: 'cliente',
				label: 'Clientes',
				width: 800
			    }
			]
		    },
		    {
			xtype: 'fieldset',
			top: 5,
			left: '80%',
			items: [
			    {
				xtype: 'textfield',
				name: 'data_entrega',
				label: 'Data da Entrega',
				labelWidth: 0,
				maxLength: 0,
				Width: 500
			    }
			]
		    },
		    {
			xtype: 'fieldset',
			top: 70,
			width: '100%',
			items: [
			    {
				xtype: 'textfield',
				name: 'observacao',
				label: 'Observação'
			    }
			]
		    }
		]
	    },
	    {
		xtype: 'label',
		text: 'Tamanho do Pneu'
	    },
	    {
		xtype: 'container',
		height: 100,
		items: [
		    {
			xtype: 'fieldset',
			width: 300,
			top: 00,
			labelWidth: 0,
			maxLength: 0,
			items: [
			    {
				xtype: 'selectfield',
				label: 'Espessura',
				name: 'espessura',
				labelWidth: 0,
				maxLength: 0,
				options: [
				    {text: '300', value: '300', size: 50},
				    {text: '295', value: '295', size: 50},
				    {text: '290', value: '290', size: 50}
				]
			    }
			]
		    },
		    {
			xtype: 'fieldset',
			width: 300,
			left: 550,
			labelWidth: 0,
			maxLength: 0,
			items: [
			    {
				xtype: 'selectfield',
				label: 'Altura',
				name: 'altura',
				labelWidth: 0,
				maxLength: 0,
				options: [
				    {text: '1', value: '1', size: 50},
				    {text: '2', value: '2', size: 50},
				    {text: '3', value: '3', size: 50}
				]
			    }
			]
		    },
		    {
			xtype: 'fieldset',
			width: 300,
			left: 1100,
			labelWidth: 0,
			maxLength: 0,
			items: [
			    {
				xtype: 'selectfield',
				label: 'Roda',
				name: 'roda',
				labelWidth: 0,
				maxLength: 0,
				options: [
				    {text: '20', value: '20', size: 50},
				    {text: '22', value: '22', size: 50},
				    {text: '24', value: '24', size: 50}
				]
			    }
			]
		    }
		]
	    },
	    {
		xtype: 'container',
		height: 100,
		items: [
		    {
			xtype: 'fieldset',
			width: 300,
			labelWidth: 0,
			maxLength: 0,
			items: [
			    {
				xtype: 'textfield',
				name: 'n_fogo',
				maxWidth: 300,
				labelWidth: 0,
				maxLength: 0,
				label: 'Nº do fogo'
			    }
			]
		    },
		    {
			xtype: 'fieldset',
			width: 300,
			labelWidth: 0,
			maxLength: 0,
			left: 550,
			top: 0,
			items: [
			    {
				xtype: 'textfield',
				name: 'n_serie',
				maxWidth: 300,
				labelWidth: 0,
				maxLength: 0,
				label: 'Nº de serie'
			    }
			]
		    },
		    {
			xtype: 'fieldset',
			width: 300,
			labelWidth: 0,
			maxLength: 0,
			left: 1100,
			top: 0,
			items: [
			    {
				xtype: 'selectfield',
				label: 'Serviço',
				name: 'servico',
				labelWidth: 0,
				maxLength: 0,
				options: [
				    {text: 'serviço 1', value: 'servico1', size: 50},
				    {text: 'serviço 2', value: 'servico2', size: 50},
				    {text: 'serviço 3', value: 'servico3', size: 50}
				]
			    }
			]
		    }
		]
	    },
	    {
		xtype: 'button',
		action: 'salvarColeta',
		ui: 'action',
		text: 'Salvar',
		width: 150,
		left: 1200
	    },
	    {
		xtype: 'button',
		action: 'deletarColeta',
		ui: 'action',
		text: 'Deletar',
		width: 150,
		left: 1000,
		hidden: true
	    }
	]
    }
});