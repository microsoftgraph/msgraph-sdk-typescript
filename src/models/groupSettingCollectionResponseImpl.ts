import {createGroupSettingFromDiscriminatorValue} from './createGroupSettingFromDiscriminatorValue';
import {GroupSetting} from './groupSetting';
import {GroupSettingCollectionResponse} from './groupSettingCollectionResponse';
import {GroupSettingImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupSettingCollectionResponseImpl implements AdditionalDataHolder, GroupSettingCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: GroupSetting[] | undefined;
    /**
     * Instantiates a new GroupSettingCollectionResponse and sets the default values.
     * @param groupSettingCollectionResponseParameterValue 
     */
    public constructor(groupSettingCollectionResponseParameterValue?: GroupSettingCollectionResponse | undefined) {
        this.additionalData = groupSettingCollectionResponseParameterValue?.additionalData ? groupSettingCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = groupSettingCollectionResponseParameterValue?.nextLink ;
        this.value = groupSettingCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<GroupSettingImpl>(createGroupSettingFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: GroupSettingImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new GroupSettingImpl(element));});
        writer.writeCollectionOfObjectValues<GroupSettingImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
