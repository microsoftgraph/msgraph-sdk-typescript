import {SetMobileDeviceManagementAuthorityResponse} from './setMobileDeviceManagementAuthorityResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setMobileDeviceManagementAuthority method. */
export class SetMobileDeviceManagementAuthorityResponseImpl implements AdditionalDataHolder, Parsable, SetMobileDeviceManagementAuthorityResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: number | undefined;
    /**
     * Instantiates a new setMobileDeviceManagementAuthorityResponse and sets the default values.
     * @param setMobileDeviceManagementAuthorityResponseParameterValue 
     */
    public constructor(setMobileDeviceManagementAuthorityResponseParameterValue?: SetMobileDeviceManagementAuthorityResponse | undefined) {
        this.additionalData = setMobileDeviceManagementAuthorityResponseParameterValue?.additionalData ? setMobileDeviceManagementAuthorityResponseParameterValue?.additionalData! : {}
        this.value = setMobileDeviceManagementAuthorityResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value){
        writer.writeNumberValue("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
