import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamSummary implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Count of guests in a team. */
    private _guestsCount?: number | undefined;
    /** Count of members in a team. */
    private _membersCount?: number | undefined;
    /** Count of owners in a team. */
    private _ownersCount?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new teamSummary and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "guestsCount": n => { this.guestsCount = n.getNumberValue(); },
            "membersCount": n => { this.membersCount = n.getNumberValue(); },
            "ownersCount": n => { this.ownersCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the guestsCount property value. Count of guests in a team.
     * @returns a integer
     */
    public get guestsCount() {
        return this._guestsCount;
    };
    /**
     * Sets the guestsCount property value. Count of guests in a team.
     * @param value Value to set for the guestsCount property.
     */
    public set guestsCount(value: number | undefined) {
        this._guestsCount = value;
    };
    /**
     * Gets the membersCount property value. Count of members in a team.
     * @returns a integer
     */
    public get membersCount() {
        return this._membersCount;
    };
    /**
     * Sets the membersCount property value. Count of members in a team.
     * @param value Value to set for the membersCount property.
     */
    public set membersCount(value: number | undefined) {
        this._membersCount = value;
    };
    /**
     * Gets the ownersCount property value. Count of owners in a team.
     * @returns a integer
     */
    public get ownersCount() {
        return this._ownersCount;
    };
    /**
     * Sets the ownersCount property value. Count of owners in a team.
     * @param value Value to set for the ownersCount property.
     */
    public set ownersCount(value: number | undefined) {
        this._ownersCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("guestsCount", this.guestsCount);
        writer.writeNumberValue("membersCount", this.membersCount);
        writer.writeNumberValue("ownersCount", this.ownersCount);
        writer.writeAdditionalData(this.additionalData);
    };
}
