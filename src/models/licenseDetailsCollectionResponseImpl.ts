import {createLicenseDetailsFromDiscriminatorValue} from './createLicenseDetailsFromDiscriminatorValue';
import {LicenseDetailsImpl} from './index';
import {LicenseDetails} from './licenseDetails';
import {LicenseDetailsCollectionResponse} from './licenseDetailsCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LicenseDetailsCollectionResponseImpl implements AdditionalDataHolder, LicenseDetailsCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: LicenseDetails[] | undefined;
    /**
     * Instantiates a new LicenseDetailsCollectionResponse and sets the default values.
     * @param licenseDetailsCollectionResponseParameterValue 
     */
    public constructor(licenseDetailsCollectionResponseParameterValue?: LicenseDetailsCollectionResponse | undefined) {
        this.additionalData = licenseDetailsCollectionResponseParameterValue?.additionalData ? licenseDetailsCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = licenseDetailsCollectionResponseParameterValue?.nextLink ;
        this.value = licenseDetailsCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<LicenseDetailsImpl>(createLicenseDetailsFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: LicenseDetailsImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new LicenseDetailsImpl(element));});
        writer.writeCollectionOfObjectValues<LicenseDetailsImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
