import {AdminMember1, Entity, IdentitySet, PublicationFacet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class BaseItemVersion extends Entity implements Parsable {
    /** Identity of the user which last modified the version. Read-only. */
    private _lastModifiedBy?: IdentitySet | AdminMember1 | undefined;
    /** Date and time the version was last modified. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Indicates the publication status of this particular version. Read-only. */
    private _publication?: PublicationFacet | AdminMember1 | undefined;
    /**
     * Instantiates a new baseItemVersion and sets the default values.
     */
    public constructor() {
        super();
        this.type = "#microsoft.graph.baseItemVersion";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "publication": n => { this.publication = n.getObjectValue<PublicationFacet>(createPublicationFacetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastModifiedBy property value. Identity of the user which last modified the version. Read-only.
     * @returns a admin
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Identity of the user which last modified the version. Read-only.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | AdminMember1 | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Date and time the version was last modified. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Date and time the version was last modified. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the publication property value. Indicates the publication status of this particular version. Read-only.
     * @returns a admin
     */
    public get publication() {
        return this._publication;
    };
    /**
     * Sets the publication property value. Indicates the publication status of this particular version. Read-only.
     * @param value Value to set for the publication property.
     */
    public set publication(value: PublicationFacet | AdminMember1 | undefined) {
        this._publication = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue<PublicationFacet>("publication", this.publication);
    };
}
