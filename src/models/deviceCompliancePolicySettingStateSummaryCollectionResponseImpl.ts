import {createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue} from './createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue';
import {DeviceCompliancePolicySettingStateSummary} from './deviceCompliancePolicySettingStateSummary';
import {DeviceCompliancePolicySettingStateSummaryCollectionResponse} from './deviceCompliancePolicySettingStateSummaryCollectionResponse';
import {DeviceCompliancePolicySettingStateSummaryImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCompliancePolicySettingStateSummaryCollectionResponseImpl implements AdditionalDataHolder, DeviceCompliancePolicySettingStateSummaryCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceCompliancePolicySettingStateSummary[] | undefined;
    /**
     * Instantiates a new DeviceCompliancePolicySettingStateSummaryCollectionResponse and sets the default values.
     * @param deviceCompliancePolicySettingStateSummaryCollectionResponseParameterValue 
     */
    public constructor(deviceCompliancePolicySettingStateSummaryCollectionResponseParameterValue?: DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined) {
        this.additionalData = deviceCompliancePolicySettingStateSummaryCollectionResponseParameterValue?.additionalData ? deviceCompliancePolicySettingStateSummaryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceCompliancePolicySettingStateSummaryCollectionResponseParameterValue?.nextLink ;
        this.value = deviceCompliancePolicySettingStateSummaryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummaryImpl>(createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceCompliancePolicySettingStateSummaryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceCompliancePolicySettingStateSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingStateSummaryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
