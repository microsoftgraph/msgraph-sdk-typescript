import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationOutcome} from './educationOutcome';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class EducationOutcomeImpl extends EntityImpl implements EducationOutcome {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The individual who updated the resource. */
    public lastModifiedBy?: IdentitySet | undefined;
    /** Moment in time when the resource was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2021 is 2021-01-01T00:00:00Z. */
    public lastModifiedDateTime?: Date | undefined;
    /**
     * Instantiates a new educationOutcome and sets the default values.
     * @param educationOutcomeParameterValue 
     */
    public constructor(educationOutcomeParameterValue?: EducationOutcome | undefined) {
        super(educationOutcomeParameterValue);
        this.additionalData = educationOutcomeParameterValue?.additionalData ? educationOutcomeParameterValue?.additionalData! : {};
        this.lastModifiedBy = educationOutcomeParameterValue?.lastModifiedBy instanceof IdentitySetImpl? educationOutcomeParameterValue?.lastModifiedBy:new IdentitySetImpl(educationOutcomeParameterValue?.lastModifiedBy);
        this.lastModifiedDateTime = educationOutcomeParameterValue?.lastModifiedDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
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
        writer.writeAdditionalData(this.additionalData);
    };
}
