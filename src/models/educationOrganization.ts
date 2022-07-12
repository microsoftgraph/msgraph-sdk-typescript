import {EducationExternalSource} from './educationExternalSource';
import {AdminMember1, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class EducationOrganization extends Entity implements Parsable {
    /** Organization description. */
    private _description?: string | undefined;
    /** Organization display name. */
    private _displayName?: string | undefined;
    /** Where this user was created from. Possible values are: sis, lms, or manual. */
    private _externalSource?: EducationExternalSource | AdminMember1 | undefined;
    /** The name of the external source this resources was generated from. */
    private _externalSourceDetail?: string | undefined;
    /**
     * Instantiates a new educationOrganization and sets the default values.
     */
    public constructor() {
        super();
        this.type = "#microsoft.graph.educationOrganization";
    };
    /**
     * Gets the description property value. Organization description.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Organization description.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Organization display name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Organization display name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the externalSource property value. Where this user was created from. Possible values are: sis, lms, or manual.
     * @returns a admin
     */
    public get externalSource() {
        return this._externalSource;
    };
    /**
     * Sets the externalSource property value. Where this user was created from. Possible values are: sis, lms, or manual.
     * @param value Value to set for the externalSource property.
     */
    public set externalSource(value: EducationExternalSource | AdminMember1 | undefined) {
        this._externalSource = value;
    };
    /**
     * Gets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @returns a string
     */
    public get externalSourceDetail() {
        return this._externalSourceDetail;
    };
    /**
     * Sets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @param value Value to set for the externalSourceDetail property.
     */
    public set externalSourceDetail(value: string | undefined) {
        this._externalSourceDetail = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalSource": n => { this.externalSource = n.getObjectValue<EducationExternalSource>(createEducationExternalSourceFromDiscriminatorValue); },
            "externalSourceDetail": n => { this.externalSourceDetail = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<EducationExternalSource>("externalSource", this.externalSource);
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
    };
}
