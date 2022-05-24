import {createProvisioningErrorInfoFromDiscriminatorValue} from './createProvisioningErrorInfoFromDiscriminatorValue';
import {ProvisioningErrorInfoImpl} from './index';
import {ProvisioningErrorInfo} from './provisioningErrorInfo';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStatusInfo} from './provisioningStatusInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProvisioningStatusInfoImpl implements AdditionalDataHolder, Parsable, ProvisioningStatusInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The errorInformation property */
    public errorInformation?: ProvisioningErrorInfo | undefined;
    /** Possible values are: success, warning, failure, skipped, unknownFutureValue. */
    public status?: ProvisioningResult | undefined;
    /**
     * Instantiates a new provisioningStatusInfo and sets the default values.
     * @param provisioningStatusInfoParameterValue 
     */
    public constructor(provisioningStatusInfoParameterValue?: ProvisioningStatusInfo | undefined) {
        this.additionalData = provisioningStatusInfoParameterValue?.additionalData ? provisioningStatusInfoParameterValue?.additionalData! : {}
        this.errorInformation = provisioningStatusInfoParameterValue?.errorInformation ;
        this.status = provisioningStatusInfoParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "errorInformation": n => { this.errorInformation = n.getObjectValue<ProvisioningErrorInfoImpl>(createProvisioningErrorInfoFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<ProvisioningResult>(ProvisioningResult); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.errorInformation){
        writer.writeObjectValue<ProvisioningErrorInfoImpl>("errorInformation", new ProvisioningErrorInfoImpl(this.errorInformation));
        }
        if(this.status){
        writer.writeEnumValue<ProvisioningResult>("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
