import {createGroupSettingTemplateFromDiscriminatorValue} from './createGroupSettingTemplateFromDiscriminatorValue';
import {GroupSettingTemplate} from './groupSettingTemplate';
import {GroupSettingTemplateCollectionResponse} from './groupSettingTemplateCollectionResponse';
import {GroupSettingTemplateImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupSettingTemplateCollectionResponseImpl implements AdditionalDataHolder, GroupSettingTemplateCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: GroupSettingTemplate[] | undefined;
    /**
     * Instantiates a new GroupSettingTemplateCollectionResponse and sets the default values.
     * @param groupSettingTemplateCollectionResponseParameterValue 
     */
    public constructor(groupSettingTemplateCollectionResponseParameterValue?: GroupSettingTemplateCollectionResponse | undefined) {
        this.additionalData = groupSettingTemplateCollectionResponseParameterValue?.additionalData ? groupSettingTemplateCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = groupSettingTemplateCollectionResponseParameterValue?.nextLink ;
        this.value = groupSettingTemplateCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<GroupSettingTemplateImpl>(createGroupSettingTemplateFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: GroupSettingTemplateImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new GroupSettingTemplateImpl(element));});
        writer.writeCollectionOfObjectValues<GroupSettingTemplateImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
