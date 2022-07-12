import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EventMessageDetail, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppInstalledEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Initiator of the event. */
    private _initiator?: IdentitySet | undefined;
    /** Display name of the teamsApp. */
    private _teamsAppDisplayName?: string | undefined;
    /** Unique identifier of the teamsApp. */
    private _teamsAppId?: string | undefined;
    /**
     * Instantiates a new TeamsAppInstalledEventMessageDetail and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "teamsAppDisplayName": n => { this.teamsAppDisplayName = n.getStringValue(); },
            "teamsAppId": n => { this.teamsAppId = n.getStringValue(); },
        };
    };
    /**
     * Gets the initiator property value. Initiator of the event.
     * @returns a identitySet
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. Initiator of the event.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | undefined) {
        this._initiator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
        writer.writeStringValue("teamsAppDisplayName", this.teamsAppDisplayName);
        writer.writeStringValue("teamsAppId", this.teamsAppId);
    };
    /**
     * Gets the teamsAppDisplayName property value. Display name of the teamsApp.
     * @returns a string
     */
    public get teamsAppDisplayName() {
        return this._teamsAppDisplayName;
    };
    /**
     * Sets the teamsAppDisplayName property value. Display name of the teamsApp.
     * @param value Value to set for the teamsAppDisplayName property.
     */
    public set teamsAppDisplayName(value: string | undefined) {
        this._teamsAppDisplayName = value;
    };
    /**
     * Gets the teamsAppId property value. Unique identifier of the teamsApp.
     * @returns a string
     */
    public get teamsAppId() {
        return this._teamsAppId;
    };
    /**
     * Sets the teamsAppId property value. Unique identifier of the teamsApp.
     * @param value Value to set for the teamsAppId property.
     */
    public set teamsAppId(value: string | undefined) {
        this._teamsAppId = value;
    };
}
