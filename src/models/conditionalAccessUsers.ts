import {createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue} from './createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue';
import {ConditionalAccessGuestsOrExternalUsers} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessUsers implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Group IDs excluded from scope of policy. */
    private _excludeGroups?: string[] | undefined;
    /** The excludeGuestsOrExternalUsers property */
    private _excludeGuestsOrExternalUsers?: ConditionalAccessGuestsOrExternalUsers | undefined;
    /** Role IDs excluded from scope of policy. */
    private _excludeRoles?: string[] | undefined;
    /** User IDs excluded from scope of policy and/or GuestsOrExternalUsers. */
    private _excludeUsers?: string[] | undefined;
    /** Group IDs in scope of policy unless explicitly excluded, or All. */
    private _includeGroups?: string[] | undefined;
    /** The includeGuestsOrExternalUsers property */
    private _includeGuestsOrExternalUsers?: ConditionalAccessGuestsOrExternalUsers | undefined;
    /** Role IDs in scope of policy unless explicitly excluded, or All. */
    private _includeRoles?: string[] | undefined;
    /** User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers. */
    private _includeUsers?: string[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new conditionalAccessUsers and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the excludeGroups property value. Group IDs excluded from scope of policy.
     * @returns a string
     */
    public get excludeGroups() {
        return this._excludeGroups;
    };
    /**
     * Sets the excludeGroups property value. Group IDs excluded from scope of policy.
     * @param value Value to set for the excludeGroups property.
     */
    public set excludeGroups(value: string[] | undefined) {
        this._excludeGroups = value;
    };
    /**
     * Gets the excludeGuestsOrExternalUsers property value. The excludeGuestsOrExternalUsers property
     * @returns a conditionalAccessGuestsOrExternalUsers
     */
    public get excludeGuestsOrExternalUsers() {
        return this._excludeGuestsOrExternalUsers;
    };
    /**
     * Sets the excludeGuestsOrExternalUsers property value. The excludeGuestsOrExternalUsers property
     * @param value Value to set for the excludeGuestsOrExternalUsers property.
     */
    public set excludeGuestsOrExternalUsers(value: ConditionalAccessGuestsOrExternalUsers | undefined) {
        this._excludeGuestsOrExternalUsers = value;
    };
    /**
     * Gets the excludeRoles property value. Role IDs excluded from scope of policy.
     * @returns a string
     */
    public get excludeRoles() {
        return this._excludeRoles;
    };
    /**
     * Sets the excludeRoles property value. Role IDs excluded from scope of policy.
     * @param value Value to set for the excludeRoles property.
     */
    public set excludeRoles(value: string[] | undefined) {
        this._excludeRoles = value;
    };
    /**
     * Gets the excludeUsers property value. User IDs excluded from scope of policy and/or GuestsOrExternalUsers.
     * @returns a string
     */
    public get excludeUsers() {
        return this._excludeUsers;
    };
    /**
     * Sets the excludeUsers property value. User IDs excluded from scope of policy and/or GuestsOrExternalUsers.
     * @param value Value to set for the excludeUsers property.
     */
    public set excludeUsers(value: string[] | undefined) {
        this._excludeUsers = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "excludeGroups": n => { this.excludeGroups = n.getCollectionOfPrimitiveValues<string>(); },
            "excludeGuestsOrExternalUsers": n => { this.excludeGuestsOrExternalUsers = n.getObjectValue<ConditionalAccessGuestsOrExternalUsers>(createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue); },
            "excludeRoles": n => { this.excludeRoles = n.getCollectionOfPrimitiveValues<string>(); },
            "excludeUsers": n => { this.excludeUsers = n.getCollectionOfPrimitiveValues<string>(); },
            "includeGroups": n => { this.includeGroups = n.getCollectionOfPrimitiveValues<string>(); },
            "includeGuestsOrExternalUsers": n => { this.includeGuestsOrExternalUsers = n.getObjectValue<ConditionalAccessGuestsOrExternalUsers>(createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue); },
            "includeRoles": n => { this.includeRoles = n.getCollectionOfPrimitiveValues<string>(); },
            "includeUsers": n => { this.includeUsers = n.getCollectionOfPrimitiveValues<string>(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the includeGroups property value. Group IDs in scope of policy unless explicitly excluded, or All.
     * @returns a string
     */
    public get includeGroups() {
        return this._includeGroups;
    };
    /**
     * Sets the includeGroups property value. Group IDs in scope of policy unless explicitly excluded, or All.
     * @param value Value to set for the includeGroups property.
     */
    public set includeGroups(value: string[] | undefined) {
        this._includeGroups = value;
    };
    /**
     * Gets the includeGuestsOrExternalUsers property value. The includeGuestsOrExternalUsers property
     * @returns a conditionalAccessGuestsOrExternalUsers
     */
    public get includeGuestsOrExternalUsers() {
        return this._includeGuestsOrExternalUsers;
    };
    /**
     * Sets the includeGuestsOrExternalUsers property value. The includeGuestsOrExternalUsers property
     * @param value Value to set for the includeGuestsOrExternalUsers property.
     */
    public set includeGuestsOrExternalUsers(value: ConditionalAccessGuestsOrExternalUsers | undefined) {
        this._includeGuestsOrExternalUsers = value;
    };
    /**
     * Gets the includeRoles property value. Role IDs in scope of policy unless explicitly excluded, or All.
     * @returns a string
     */
    public get includeRoles() {
        return this._includeRoles;
    };
    /**
     * Sets the includeRoles property value. Role IDs in scope of policy unless explicitly excluded, or All.
     * @param value Value to set for the includeRoles property.
     */
    public set includeRoles(value: string[] | undefined) {
        this._includeRoles = value;
    };
    /**
     * Gets the includeUsers property value. User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers.
     * @returns a string
     */
    public get includeUsers() {
        return this._includeUsers;
    };
    /**
     * Sets the includeUsers property value. User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers.
     * @param value Value to set for the includeUsers property.
     */
    public set includeUsers(value: string[] | undefined) {
        this._includeUsers = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("excludeGroups", this.excludeGroups);
        writer.writeObjectValue<ConditionalAccessGuestsOrExternalUsers>("excludeGuestsOrExternalUsers", this.excludeGuestsOrExternalUsers);
        writer.writeCollectionOfPrimitiveValues<string>("excludeRoles", this.excludeRoles);
        writer.writeCollectionOfPrimitiveValues<string>("excludeUsers", this.excludeUsers);
        writer.writeCollectionOfPrimitiveValues<string>("includeGroups", this.includeGroups);
        writer.writeObjectValue<ConditionalAccessGuestsOrExternalUsers>("includeGuestsOrExternalUsers", this.includeGuestsOrExternalUsers);
        writer.writeCollectionOfPrimitiveValues<string>("includeRoles", this.includeRoles);
        writer.writeCollectionOfPrimitiveValues<string>("includeUsers", this.includeUsers);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
