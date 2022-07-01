import {createOrganizationalBrandingLocalizationFromDiscriminatorValue} from './createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import {OrganizationalBrandingLocalizationImpl, OrganizationalBrandingPropertiesImpl} from './index';
import {OrganizationalBranding} from './organizationalBranding';
import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrganizationalBrandingImpl extends OrganizationalBrandingPropertiesImpl implements OrganizationalBranding {
    /** Add different branding based on a locale. */
    private _localizations?: OrganizationalBrandingLocalization[] | undefined;
    /**
     * Instantiates a new OrganizationalBranding and sets the default values.
     * @param organizationalBrandingParameterValue 
     */
    public constructor(organizationalBrandingParameterValue?: OrganizationalBranding | undefined) {
        super(organizationalBrandingParameterValue);
        this._localizations = organizationalBrandingParameterValue?.localizations;
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
     * Gets the localizations property value. Add different branding based on a locale.
     * @returns a OrganizationalBrandingLocalizationInterface
     */
    public get localizations() {
        return this._localizations;
    };
    /**
     * Sets the localizations property value. Add different branding based on a locale.
     * @param value Value to set for the localizations property.
     */
    public set localizations(value: OrganizationalBrandingLocalization[] | undefined) {
        if(value) {
            const localizationsArrValue: OrganizationalBrandingLocalizationImpl[] = [];
            this.localizations?.forEach(element => {
                localizationsArrValue.push((element instanceof OrganizationalBrandingLocalizationImpl? element as OrganizationalBrandingLocalizationImpl:new OrganizationalBrandingLocalizationImpl(element)));
            });
            this._localizations = localizationsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.localizations && this.localizations.length != 0){        const localizationsArrValue: OrganizationalBrandingLocalizationImpl[] = [];
        this.localizations?.forEach(element => {
            localizationsArrValue.push((element instanceof OrganizationalBrandingLocalizationImpl? element as OrganizationalBrandingLocalizationImpl:new OrganizationalBrandingLocalizationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OrganizationalBrandingLocalizationImpl>("localizations", localizationsArrValue);
        }
    };
}
