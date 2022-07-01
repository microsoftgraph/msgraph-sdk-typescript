import {BaseItemVersion} from './baseItemVersion';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPublicationFacetFromDiscriminatorValue} from './createPublicationFacetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, PublicationFacetImpl} from './index';
import {PublicationFacet} from './publicationFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class BaseItemVersionImpl extends EntityImpl implements BaseItemVersion {
    /** Identity of the user which last modified the version. Read-only. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Date and time the version was last modified. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Indicates the publication status of this particular version. Read-only. */
    private _publication?: PublicationFacet | undefined;
    /**
     * Instantiates a new baseItemVersion and sets the default values.
     * @param baseItemVersionParameterValue 
     */
    public constructor(baseItemVersionParameterValue?: BaseItemVersion | undefined) {
        super(baseItemVersionParameterValue);
        this._lastModifiedBy = baseItemVersionParameterValue?.lastModifiedBy;
        this._lastModifiedDateTime = baseItemVersionParameterValue?.lastModifiedDateTime;
        this._publication = baseItemVersionParameterValue?.publication;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "publication": n => { this.publication = n.getObjectValue<PublicationFacetImpl>(createPublicationFacetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastModifiedBy property value. Identity of the user which last modified the version. Read-only.
     * @returns a IdentitySetInterface
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Identity of the user which last modified the version. Read-only.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        if(value) {
            this._lastModifiedBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
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
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the publication property value. Indicates the publication status of this particular version. Read-only.
     * @returns a PublicationFacetInterface
     */
    public get publication() {
        return this._publication;
    };
    /**
     * Sets the publication property value. Indicates the publication status of this particular version. Read-only.
     * @param value Value to set for the publication property.
     */
    public set publication(value: PublicationFacet | undefined) {
        if(value) {
            this._publication = value instanceof PublicationFacetImpl? value as PublicationFacetImpl: new PublicationFacetImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.lastModifiedBy){
            writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", (this.lastModifiedBy instanceof IdentitySetImpl? this.lastModifiedBy as IdentitySetImpl: new IdentitySetImpl(this.lastModifiedBy)));
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.publication){
            writer.writeObjectValue<PublicationFacetImpl>("publication", (this.publication instanceof PublicationFacetImpl? this.publication as PublicationFacetImpl: new PublicationFacetImpl(this.publication)));
        }
    };
}
