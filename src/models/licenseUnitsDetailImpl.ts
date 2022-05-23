import {LicenseUnitsDetail} from './licenseUnitsDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LicenseUnitsDetailImpl implements AdditionalDataHolder, LicenseUnitsDetail, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The number of units that are enabled for the active subscription of the service SKU. */
    public enabled?: number | undefined;
    /** The number of units that are suspended because the subscription of the service SKU has been cancelled. The units cannot be assigned but can still be reactivated before they are deleted. */
    public suspended?: number | undefined;
    /** The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it is cancelled (moved to a suspended state). */
    public warning?: number | undefined;
    /**
     * Instantiates a new licenseUnitsDetail and sets the default values.
     * @param licenseUnitsDetailParameterValue 
     */
    public constructor(licenseUnitsDetailParameterValue?: LicenseUnitsDetail | undefined) {
        this.additionalData = licenseUnitsDetailParameterValue?.additionalData ? licenseUnitsDetailParameterValue?.additionalData! : {}
        this.enabled = licenseUnitsDetailParameterValue?.enabled ;
        this.suspended = licenseUnitsDetailParameterValue?.suspended ;
        this.warning = licenseUnitsDetailParameterValue?.warning ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enabled": n => { this.enabled = n.getNumberValue(); },
            "suspended": n => { this.suspended = n.getNumberValue(); },
            "warning": n => { this.warning = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.enabled){
        writer.writeNumberValue("enabled", this.enabled);
        }
        if(this.suspended){
        writer.writeNumberValue("suspended", this.suspended);
        }
        if(this.warning){
        writer.writeNumberValue("warning", this.warning);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
