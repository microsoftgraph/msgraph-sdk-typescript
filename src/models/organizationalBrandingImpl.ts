import {createOrganizationalBrandingLocalizationFromDiscriminatorValue} from './createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import {OrganizationalBrandingLocalizationImpl, OrganizationalBrandingPropertiesImpl} from './index';
import {OrganizationalBranding} from './organizationalBranding';
import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrganizationalBrandingImpl extends OrganizationalBrandingPropertiesImpl implements OrganizationalBranding {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Add different branding based on a locale. */
    public localizations?: OrganizationalBrandingLocalization[] | undefined;
    /**
     * Instantiates a new OrganizationalBranding and sets the default values.
     * @param organizationalBrandingParameterValue 
     */
    public constructor(organizationalBrandingParameterValue?: OrganizationalBranding | undefined) {
        super(organizationalBrandingParameterValue);
        this.additionalData = organizationalBrandingParameterValue?.additionalData ? organizationalBrandingParameterValue?.additionalData! : {};
        const localizationsArrValue: OrganizationalBrandingLocalizationImpl[] = []; organizationalBrandingParameterValue.localizations?.forEach(element => {localizationsArrValue.push(element instanceof OrganizationalBrandingLocalizationImpl? element : new OrganizationalBrandingLocalizationImpl(element));});
        this.localizations = localizationsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "localizations": n => { this.localizations = n.getCollectionOfObjectValues<OrganizationalBrandingLocalizationImpl>(createOrganizationalBrandingLocalizationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.localizations && this.localizations.length != 0){        const localizationsArrValue: OrganizationalBrandingLocalizationImpl[] = []; this.localizations?.forEach(element => {localizationsArrValue.push(element instanceof OrganizationalBrandingLocalizationImpl? element : new OrganizationalBrandingLocalizationImpl(element));});
            writer.writeCollectionOfObjectValues<OrganizationalBrandingLocalizationImpl>("localizations", localizationsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
