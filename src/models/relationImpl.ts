import {EntityImpl} from './index';
import {Relation} from './relation';
import {SetImpl, TermImpl} from './termStore/';
import {createSetFromDiscriminatorValue} from './termStore/createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './termStore/createTermFromDiscriminatorValue';
import {RelationType} from './termStore/relationType';
import {Set} from './termStore/set';
import {Term} from './termStore/term';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RelationImpl extends EntityImpl implements Relation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set]. */
    public fromTerm?: Term | undefined;
    /** The type of relation. Possible values are: pin, reuse. */
    public relationship?: RelationType | undefined;
    /** The [set] in which the relation is relevant. */
    public set?: Set | undefined;
    /** The to [term] of the relation. The term to which the relationship is defined. */
    public toTerm?: Term | undefined;
    /**
     * Instantiates a new Relation and sets the default values.
     * @param relationParameterValue 
     */
    public constructor(relationParameterValue?: Relation | undefined) {
        super(relationParameterValue);
        this.additionalData = relationParameterValue?.additionalData ? relationParameterValue?.additionalData! : {};
        this.fromTerm = relationParameterValue?.fromTerm instanceof TermImpl? relationParameterValue?.fromTerm:new TermImpl(relationParameterValue?.fromTerm);
        this.relationship = relationParameterValue?.relationship;
        this.set = relationParameterValue?.set instanceof SetImpl? relationParameterValue?.set:new SetImpl(relationParameterValue?.set);
        this.toTerm = relationParameterValue?.toTerm instanceof TermImpl? relationParameterValue?.toTerm:new TermImpl(relationParameterValue?.toTerm);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "fromTerm": n => { this.fromTerm = n.getObjectValue<TermImpl>(createTermFromDiscriminatorValue); },
            "relationship": n => { this.relationship = n.getEnumValue<RelationType>(RelationType); },
            "set": n => { this.set = n.getObjectValue<SetImpl>(createSetFromDiscriminatorValue); },
            "toTerm": n => { this.toTerm = n.getObjectValue<TermImpl>(createTermFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.fromTerm){
            writer.writeObjectValue<TermImpl>("fromTerm", new TermImpl(this.fromTerm));
        }
        if(this.relationship){
            writer.writeEnumValue<RelationType>("relationship", this.relationship);
        }
        if(this.set){
            writer.writeObjectValue<SetImpl>("set", new SetImpl(this.set));
        }
        if(this.toTerm){
            writer.writeObjectValue<TermImpl>("toTerm", new TermImpl(this.toTerm));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
