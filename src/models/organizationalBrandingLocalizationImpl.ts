import {OrganizationalBrandingPropertiesImpl} from './index';
import {OrganizationalBrandingLocalization} from './organizationalBrandingLocalization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the organizationalBranding singleton. */
export class OrganizationalBrandingLocalizationImpl extends OrganizationalBrandingPropertiesImpl implements OrganizationalBrandingLocalization, Parsable {
    /**
     * Instantiates a new organizationalBrandingLocalization and sets the default values.
     * @param organizationalBrandingLocalizationParameterValue 
     */
    public constructor(organizationalBrandingLocalizationParameterValue?: OrganizationalBrandingLocalization | undefined) {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
