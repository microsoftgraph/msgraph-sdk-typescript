import {IdentitySet} from './identitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IncomingContext implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The id of the participant that is under observation. Read-only.  */
    private _observedParticipantId?: string | undefined;
    /** The identity that the call is happening on behalf of.  */
    private _onBehalfOf?: IdentitySet | undefined;
    /** The id of the participant that triggered the incoming call. Read-only.  */
    private _sourceParticipantId?: string | undefined;
    /** The identity that transferred the call.  */
    private _transferor?: IdentitySet | undefined;
    /**
     * Instantiates a new incomingContext and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the observedParticipantId property value. The id of the participant that is under observation. Read-only.
     * @returns a string
     */
    public get observedParticipantId() {
        return this._observedParticipantId;
    };
    /**
     * Gets the onBehalfOf property value. The identity that the call is happening on behalf of.
     * @returns a identitySet
     */
    public get onBehalfOf() {
        return this._onBehalfOf;
    };
    /**
     * Gets the sourceParticipantId property value. The id of the participant that triggered the incoming call. Read-only.
     * @returns a string
     */
    public get sourceParticipantId() {
        return this._sourceParticipantId;
    };
    /**
     * Gets the transferor property value. The identity that transferred the call.
     * @returns a identitySet
     */
    public get transferor() {
        return this._transferor;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["observedParticipantId", (o, n) => { (o as unknown as IncomingContext).observedParticipantId = n.getStringValue(); }],
            ["onBehalfOf", (o, n) => { (o as unknown as IncomingContext).onBehalfOf = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["sourceParticipantId", (o, n) => { (o as unknown as IncomingContext).sourceParticipantId = n.getStringValue(); }],
            ["transferor", (o, n) => { (o as unknown as IncomingContext).transferor = n.getObjectValue<IdentitySet>(IdentitySet); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("observedParticipantId", this.observedParticipantId);
        writer.writeObjectValue<IdentitySet>("onBehalfOf", this.onBehalfOf);
        writer.writeStringValue("sourceParticipantId", this.sourceParticipantId);
        writer.writeObjectValue<IdentitySet>("transferor", this.transferor);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the observedParticipantId property value. The id of the participant that is under observation. Read-only.
     * @param value Value to set for the observedParticipantId property.
     */
    public set observedParticipantId(value: string | undefined) {
        this._observedParticipantId = value;
    };
    /**
     * Sets the onBehalfOf property value. The identity that the call is happening on behalf of.
     * @param value Value to set for the onBehalfOf property.
     */
    public set onBehalfOf(value: IdentitySet | undefined) {
        this._onBehalfOf = value;
    };
    /**
     * Sets the sourceParticipantId property value. The id of the participant that triggered the incoming call. Read-only.
     * @param value Value to set for the sourceParticipantId property.
     */
    public set sourceParticipantId(value: string | undefined) {
        this._sourceParticipantId = value;
    };
    /**
     * Sets the transferor property value. The identity that transferred the call.
     * @param value Value to set for the transferor property.
     */
    public set transferor(value: IdentitySet | undefined) {
        this._transferor = value;
    };
}
