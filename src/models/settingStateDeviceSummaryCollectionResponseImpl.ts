import {createSettingStateDeviceSummaryFromDiscriminatorValue} from './createSettingStateDeviceSummaryFromDiscriminatorValue';
import {SettingStateDeviceSummaryImpl} from './index';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {SettingStateDeviceSummaryCollectionResponse} from './settingStateDeviceSummaryCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SettingStateDeviceSummaryCollectionResponseImpl implements AdditionalDataHolder, Parsable, SettingStateDeviceSummaryCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SettingStateDeviceSummary[] | undefined;
    /**
     * Instantiates a new SettingStateDeviceSummaryCollectionResponse and sets the default values.
     * @param settingStateDeviceSummaryCollectionResponseParameterValue 
     */
    public constructor(settingStateDeviceSummaryCollectionResponseParameterValue?: SettingStateDeviceSummaryCollectionResponse | undefined) {
        this.additionalData = settingStateDeviceSummaryCollectionResponseParameterValue?.additionalData ? settingStateDeviceSummaryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = settingStateDeviceSummaryCollectionResponseParameterValue?.nextLink ;
        this.value = settingStateDeviceSummaryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SettingStateDeviceSummaryImpl>(createSettingStateDeviceSummaryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SettingStateDeviceSummaryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SettingStateDeviceSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummaryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
