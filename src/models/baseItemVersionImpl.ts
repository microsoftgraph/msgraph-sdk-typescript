import {BaseItemVersion} from './baseItemVersion';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPublicationFacetFromDiscriminatorValue} from './createPublicationFacetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, PublicationFacetImpl} from './index';
import {PublicationFacet} from './publicationFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class BaseItemVersionImpl extends EntityImpl implements BaseItemVersion, Parsable {
    /** Identity of the user which last modified the version. Read-only. */
    public lastModifiedBy?: IdentitySet | undefined;
    /** Date and time the version was last modified. Read-only. */
    public lastModifiedDateTime?: Date | undefined;
    /** Indicates the publication status of this particular version. Read-only. */
    public publication?: PublicationFacet | undefined;
    /**
     * Instantiates a new baseItemVersion and sets the default values.
     * @param baseItemVersionParameterValue 
     */
    public constructor(baseItemVersionParameterValue?: BaseItemVersion | undefined) {
        super();
        this.lastModifiedBy = baseItemVersionParameterValue?.lastModifiedBy ;
        this.lastModifiedDateTime = baseItemVersionParameterValue?.lastModifiedDateTime ;
        this.publication = baseItemVersionParameterValue?.publication ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.lastModifiedBy){
        writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", new IdentitySetImpl(this.lastModifiedBy));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.publication){
        writer.writeObjectValue<PublicationFacetImpl>("publication", new PublicationFacetImpl(this.publication));
        }
    };
}
