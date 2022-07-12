import {IdentitySet} from '../';
import {CommunicationsMember1, Endpoint, UserFeedback} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantEndpoint extends Endpoint implements Parsable {
    /** The feedback provided by the user of this endpoint about the quality of the session. */
    private _feedback?: UserFeedback | CommunicationsMember1 | undefined;
    /** Identity associated with the endpoint. */
    private _identity?: IdentitySet | CommunicationsMember1 | undefined;
    /**
     * Instantiates a new ParticipantEndpoint and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the feedback property value. The feedback provided by the user of this endpoint about the quality of the session.
     * @returns a communications
     */
    public get feedback() {
        return this._feedback;
    };
    /**
     * Sets the feedback property value. The feedback provided by the user of this endpoint about the quality of the session.
     * @param value Value to set for the feedback property.
     */
    public set feedback(value: UserFeedback | CommunicationsMember1 | undefined) {
        this._feedback = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "feedback": n => { this.feedback = n.getObjectValue<UserFeedback>(createUserFeedbackFromDiscriminatorValue); },
            "identity": n => { this.identity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the identity property value. Identity associated with the endpoint.
     * @returns a communications
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Sets the identity property value. Identity associated with the endpoint.
     * @param value Value to set for the identity property.
     */
    public set identity(value: IdentitySet | CommunicationsMember1 | undefined) {
        this._identity = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UserFeedback>("feedback", this.feedback);
        writer.writeObjectValue<IdentitySet>("identity", this.identity);
    };
}
