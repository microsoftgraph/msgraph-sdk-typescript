import {createOrganizationalBrandingLocalizationFromDiscriminatorValue} from './createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import {OrganizationalBrandingLocalizationImpl} from './index';
import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {OrganizationalBrandingLocalizationCollectionResponse} from './organizationalBrandingLocalizationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrganizationalBrandingLocalizationCollectionResponseImpl implements AdditionalDataHolder, OrganizationalBrandingLocalizationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: OrganizationalBrandingLocalization[] | undefined;
    /**
     * Instantiates a new OrganizationalBrandingLocalizationCollectionResponse and sets the default values.
     * @param organizationalBrandingLocalizationCollectionResponseParameterValue 
     */
    public constructor(organizationalBrandingLocalizationCollectionResponseParameterValue?: OrganizationalBrandingLocalizationCollectionResponse | undefined) {
        this.additionalData = organizationalBrandingLocalizationCollectionResponseParameterValue?.additionalData ? organizationalBrandingLocalizationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = organizationalBrandingLocalizationCollectionResponseParameterValue?.nextLink ;
        this.value = organizationalBrandingLocalizationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<OrganizationalBrandingLocalizationImpl>(createOrganizationalBrandingLocalizationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: OrganizationalBrandingLocalizationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new OrganizationalBrandingLocalizationImpl(element));});
        writer.writeCollectionOfObjectValues<OrganizationalBrandingLocalizationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
