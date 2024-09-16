import { TextFieldEntry, isTextFieldEntryEdited } from '@bpmn-io/properties-panel';
import { useService } from 'bpmn-js-properties-panel';

export default function(element) {

  return [
    {
        id: 'customURL',
        element,
        component: customURL,
        isEdited: isTextFieldEntryEdited
    },
    {
        id: 'customExposedModule',
        element,
        component: customExposedModule,
        isEdited: isTextFieldEntryEdited
    },
    {
        id: 'customExposedType',
        element,
        component: customExposedType,
        isEdited: isTextFieldEntryEdited
    }
  ];
}

function customURL(props) {
  const { element, id } = props;

  const modeling = useService('modeling');
  const translate = useService('translate');
  const debounce = useService('debounceInput');

  const getValue = () => {
    return element.businessObject.custom || '';
  }

  const setValue = value => {
    return modeling.updateProperties(element, {
      url: value
    });
  }

  const title = translate('URL');
  const label = translate('URL');
  return new TextFieldEntry({
    id,
    element,
    getValue,
    setValue,
    debounce,
    title,
    label
  });
}

function customExposedModule(props) {
    const { element, id } = props;
  
    const modeling = useService('modeling');
    const translate = useService('translate');
    const debounce = useService('debounceInput');
  
    const getValue = () => {
      return element.businessObject.custom || '';
    }
  
    const setValue = value => {
      return modeling.updateProperties(element, {
        exposedModule: value
      });
    }
  
    const title = translate('Exposed Module');
    const label = translate('Exposed Module');
    return new TextFieldEntry({
      id,
      element,
      getValue,
      setValue,
      debounce,
      title,
      label,
    });
  }

  function customExposedType(props) {
    const { element, id } = props;
  
    const modeling = useService('modeling');
    const translate = useService('translate');
    const debounce = useService('debounceInput');
  
    const getValue = () => {
      return element.businessObject.custom || '';
    }
  
    const setValue = value => {
      return modeling.updateProperties(element, {
        exposedType: value
      });
    }
  
    const title = translate('Exposed Type');
    const label = translate('Exposed Type');
    return new TextFieldEntry({
      id,
      element,
      getValue,
      setValue,
      debounce,
      title,
      label
    });
  }