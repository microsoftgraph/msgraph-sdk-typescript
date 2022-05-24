import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createWorkbookIconFromDiscriminatorValue} from './createWorkbookIconFromDiscriminatorValue';
import {JsonImpl, WorkbookIconImpl} from './index';
import {Json} from './json';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {WorkbookIcon} from './workbookIcon';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookFilterCriteriaImpl implements AdditionalDataHolder, Parsable, WorkbookFilterCriteria {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The color property */
    public color?: string | undefined;
    /** The criterion1 property */
    public criterion1?: string | undefined;
    /** The criterion2 property */
    public criterion2?: string | undefined;
    /** The dynamicCriteria property */
    public dynamicCriteria?: string | undefined;
    /** The filterOn property */
    public filterOn?: string | undefined;
    /** The icon property */
    public icon?: WorkbookIcon | undefined;
    /** The operator property */
    public operator?: string | undefined;
    /** The values property */
    public values?: Json | undefined;
    /**
     * Instantiates a new workbookFilterCriteria and sets the default values.
     * @param workbookFilterCriteriaParameterValue 
     */
    public constructor(workbookFilterCriteriaParameterValue?: WorkbookFilterCriteria | undefined) {
        this.additionalData = workbookFilterCriteriaParameterValue?.additionalData ? workbookFilterCriteriaParameterValue?.additionalData! : {}
        this.color = workbookFilterCriteriaParameterValue?.color ;
        this.criterion1 = workbookFilterCriteriaParameterValue?.criterion1 ;
        this.criterion2 = workbookFilterCriteriaParameterValue?.criterion2 ;
        this.dynamicCriteria = workbookFilterCriteriaParameterValue?.dynamicCriteria ;
        this.filterOn = workbookFilterCriteriaParameterValue?.filterOn ;
        this.icon = workbookFilterCriteriaParameterValue?.icon ;
        this.operator = workbookFilterCriteriaParameterValue?.operator ;
        this.values = workbookFilterCriteriaParameterValue?.values ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "color": n => { this.color = n.getStringValue(); },
            "criterion1": n => { this.criterion1 = n.getStringValue(); },
            "criterion2": n => { this.criterion2 = n.getStringValue(); },
            "dynamicCriteria": n => { this.dynamicCriteria = n.getStringValue(); },
            "filterOn": n => { this.filterOn = n.getStringValue(); },
            "icon": n => { this.icon = n.getObjectValue<WorkbookIconImpl>(createWorkbookIconFromDiscriminatorValue); },
            "operator": n => { this.operator = n.getStringValue(); },
            "values": n => { this.values = n.getObjectValue<JsonImpl>(createJsonFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.color){
        writer.writeStringValue("color", this.color);
        }
        if(this.criterion1){
        writer.writeStringValue("criterion1", this.criterion1);
        }
        if(this.criterion2){
        writer.writeStringValue("criterion2", this.criterion2);
        }
        if(this.dynamicCriteria){
        writer.writeStringValue("dynamicCriteria", this.dynamicCriteria);
        }
        if(this.filterOn){
        writer.writeStringValue("filterOn", this.filterOn);
        }
        if(this.icon){
        writer.writeObjectValue<WorkbookIconImpl>("icon", new WorkbookIconImpl(this.icon));
        }
        if(this.operator){
        writer.writeStringValue("operator", this.operator);
        }
        if(this.values){
        writer.writeObjectValue<JsonImpl>("values", new JsonImpl(this.values));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
