import {ConditionalAccessDevices} from './conditionalAccessDevices';
import {ConditionalAccessFilter} from './conditionalAccessFilter';
import {createConditionalAccessFilterFromDiscriminatorValue} from './createConditionalAccessFilterFromDiscriminatorValue';
import {ConditionalAccessFilterImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessDevicesImpl implements AdditionalDataHolder, ConditionalAccessDevices, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Filter that defines the dynamic-device-syntax rule to include/exclude devices. A filter can use device properties (such as extension attributes) to include/exclude them. Cannot be set if includeDevices or excludeDevices is set. */
    public deviceFilter?: ConditionalAccessFilter | undefined;
    /**
     * Instantiates a new conditionalAccessDevices and sets the default values.
     * @param conditionalAccessDevicesParameterValue 
     */
    public constructor(conditionalAccessDevicesParameterValue?: ConditionalAccessDevices | undefined) {
        this.additionalData = conditionalAccessDevicesParameterValue?.additionalData ? conditionalAccessDevicesParameterValue?.additionalData! : {}
        this.deviceFilter = conditionalAccessDevicesParameterValue?.deviceFilter ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceFilter": n => { this.deviceFilter = n.getObjectValue<ConditionalAccessFilterImpl>(createConditionalAccessFilterFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.deviceFilter){
        writer.writeObjectValue<ConditionalAccessFilterImpl>("deviceFilter", new ConditionalAccessFilterImpl(this.deviceFilter));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
