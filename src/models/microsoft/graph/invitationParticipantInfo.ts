import {IdentitySet} from './identitySet';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class InvitationParticipantInfo implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _identity?: IdentitySet | undefined;
    /** Optional. The call which the target idenity is currently a part of. This call will be dropped once the participant is added.  */
    private _replacesCallId?: string | undefined;
    /**
     * Instantiates a new invitationParticipantInfo and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the identity property value. 
     * @returns a identitySet
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Gets the replacesCallId property value. Optional. The call which the target idenity is currently a part of. This call will be dropped once the participant is added.
     * @returns a string
     */
    public get replacesCallId() {
        return this._replacesCallId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["identity", (o, n) => { (o as unknown as InvitationParticipantInfo).identity = n.getObjectValue<IdentitySet>(IdentitySet); }],
            ["replacesCallId", (o, n) => { (o as unknown as InvitationParticipantInfo).replacesCallId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("identity", this.identity);
        writer.writeStringValue("replacesCallId", this.replacesCallId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the identity property value. 
     * @param value Value to set for the identity property.
     */
    public set identity(value: IdentitySet | undefined) {
        this._identity = value;
    };
    /**
     * Sets the replacesCallId property value. Optional. The call which the target idenity is currently a part of. This call will be dropped once the participant is added.
     * @param value Value to set for the replacesCallId property.
     */
    public set replacesCallId(value: string | undefined) {
        this._replacesCallId = value;
    };
}
