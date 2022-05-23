import {createOrganizationalBrandingLocalizationFromDiscriminatorValue} from './createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import {OrganizationalBrandingLocalizationImpl, OrganizationalBrandingPropertiesImpl} from './index';
import {OrganizationalBranding} from './organizationalBranding';
import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the organizationalBranding singleton. */
export class OrganizationalBrandingImpl extends OrganizationalBrandingPropertiesImpl implements OrganizationalBranding, Parsable {
    /** Add different branding based on a locale. */
    public localizations?: OrganizationalBrandingLocalization[] | undefined;
    /**
     * Instantiates a new organizationalBranding and sets the default values.
     * @param organizationalBrandingParameterValue 
     */
    public constructor(organizationalBrandingParameterValue?: OrganizationalBranding | undefined) {
        super();
        this.localizations = organizationalBrandingParameterValue?.localizations ;
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
        if(this.localizations && this.localizations.length != 0){        const localizationsArrValue: OrganizationalBrandingLocalizationImpl[] = []; this.localizations?.forEach(element => {localizationsArrValue.push(new OrganizationalBrandingLocalizationImpl(element));});
        writer.writeCollectionOfObjectValues<OrganizationalBrandingLocalizationImpl>("localizations", localizationsArrValue);
        }
    };
}
