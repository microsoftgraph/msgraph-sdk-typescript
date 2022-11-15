import {TeamworkUserIdentity} from '../../../../../models/';
import {createTeamworkUserIdentityFromDiscriminatorValue} from '../../../../../models/createTeamworkUserIdentityFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the markChatUnreadForUser method. */
export class MarkChatUnreadForUserPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The lastMessageReadDateTime property */
    private _lastMessageReadDateTime?: Date | undefined;
    /** The user property */
    private _user?: TeamworkUserIdentity | undefined;
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
     * Instantiates a new markChatUnreadForUserPostRequestBody and sets the default values.
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
            "lastMessageReadDateTime": n => { this.lastMessageReadDateTime = n.getDateValue(); },
            "user": n => { this.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastMessageReadDateTime property value. The lastMessageReadDateTime property
     * @returns a Date
     */
    public get lastMessageReadDateTime() {
        return this._lastMessageReadDateTime;
    };
    /**
     * Sets the lastMessageReadDateTime property value. The lastMessageReadDateTime property
     * @param value Value to set for the lastMessageReadDateTime property.
     */
    public set lastMessageReadDateTime(value: Date | undefined) {
        this._lastMessageReadDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("lastMessageReadDateTime", this.lastMessageReadDateTime);
        writer.writeObjectValue<TeamworkUserIdentity>("user", this.user);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the user property value. The user property
     * @returns a teamworkUserIdentity
     */
    public get user() {
        return this._user;
    };
    /**
     * Sets the user property value. The user property
     * @param value Value to set for the user property.
     */
    public set user(value: TeamworkUserIdentity | undefined) {
        this._user = value;
    };
}
