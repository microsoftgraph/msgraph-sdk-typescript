import {createOrganizationalBrandingLocalizationFromDiscriminatorValue} from './createOrganizationalBrandingLocalizationFromDiscriminatorValue';
import {OrganizationalBrandingLocalization, OrganizationalBrandingProperties} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OrganizationalBranding extends OrganizationalBrandingProperties implements Parsable {
    /** Add different branding based on a locale. */
    private _localizations?: OrganizationalBrandingLocalization[] | undefined;
    /**
     * Instantiates a new OrganizationalBranding and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.organizationalBranding";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "localizations": n => { this.localizations = n.getCollectionOfObjectValues<OrganizationalBrandingLocalization>(createOrganizationalBrandingLocalizationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the localizations property value. Add different branding based on a locale.
     * @returns a organizationalBrandingLocalization
     */
    public get localizations() {
        return this._localizations;
    };
    /**
     * Sets the localizations property value. Add different branding based on a locale.
     * @param value Value to set for the localizations property.
     */
    public set localizations(value: OrganizationalBrandingLocalization[] | undefined) {
        this._localizations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<OrganizationalBrandingLocalization>("localizations", this.localizations);
    };
}
