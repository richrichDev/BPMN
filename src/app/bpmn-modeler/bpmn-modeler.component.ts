import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Modeler from 'bpmn-js/lib/Modeler';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule,
} from 'bpmn-js-properties-panel';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';

// https://github.com/npapp-dev/bpmn-angular-integration-examples
import customPropertiesUserTaskProvider from '../custom-properties-provider/custom-user-task-property-provider';  



@Component({
  selector: 'app-bpmn-modeler',
  templateUrl: './bpmn-modeler.component.html',
  styleUrls: ['./bpmn-modeler.component.scss'],
  standalone: true
})
export class BpmnModelerComponent implements OnInit {
  @ViewChild('bpmnContainer', { static: true }) private bpmnContainer!: ElementRef;
  @ViewChild('propertiesPanel', { static: true }) private propertiesPanel!: ElementRef;

  private modeler!: Modeler;

  ngOnInit(): void {
    this.initializeModeler();
  }

  private initializeModeler(): void {
    this.modeler = new Modeler({
      container: this.bpmnContainer.nativeElement,
      propertiesPanel: {
        parent: this.propertiesPanel.nativeElement
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        CamundaPlatformPropertiesProviderModule,
        customPropertiesUserTaskProvider
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
    });

    // Load an initial empty BPMN diagram
    this.modeler.createDiagram();
  }

  exportBpmn(): void {
    this.modeler.saveXML({ format: true })
      .then((result: { xml?: string }) => {
        const xml = result.xml;
        if (xml) {
          console.log('BPMN XML exported successfully: ', xml);
          // Optional: Use downloadXML function if you want to trigger file download
          // this.downloadXML(xml);
        } else {
          console.error('Failed to export BPMN XML: XML is undefined');
        }
      })
      .catch((err: any) => {
        console.error('Error exporting BPMN XML: ', err);
      });
  }
  
  
}
