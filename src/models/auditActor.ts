import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A class containing the properties for Audit Actor. */
export class AuditActor implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the Application. */
    private _applicationDisplayName?: string | undefined;
    /** AAD Application Id. */
    private _applicationId?: string | undefined;
    /** Actor Type. */
    private _auditActorType?: string | undefined;
    /** IPAddress. */
    private _ipAddress?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Service Principal Name (SPN). */
    private _servicePrincipalName?: string | undefined;
    /** User Id. */
    private _userId?: string | undefined;
    /** List of user permissions when the audit was performed. */
    private _userPermissions?: string[] | undefined;
    /** User Principal Name (UPN). */
    private _userPrincipalName?: string | undefined;
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
     * Gets the applicationDisplayName property value. Name of the Application.
     * @returns a string
     */
    public get applicationDisplayName() {
        return this._applicationDisplayName;
    };
    /**
     * Sets the applicationDisplayName property value. Name of the Application.
     * @param value Value to set for the applicationDisplayName property.
     */
    public set applicationDisplayName(value: string | undefined) {
        this._applicationDisplayName = value;
    };
    /**
     * Gets the applicationId property value. AAD Application Id.
     * @returns a string
     */
    public get applicationId() {
        return this._applicationId;
    };
    /**
     * Sets the applicationId property value. AAD Application Id.
     * @param value Value to set for the applicationId property.
     */
    public set applicationId(value: string | undefined) {
        this._applicationId = value;
    };
    /**
     * Gets the auditActorType property value. Actor Type.
     * @returns a string
     */
    public get auditActorType() {
        return this._auditActorType;
    };
    /**
     * Sets the auditActorType property value. Actor Type.
     * @param value Value to set for the auditActorType property.
     */
    public set auditActorType(value: string | undefined) {
        this._auditActorType = value;
    };
    /**
     * Instantiates a new auditActor and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.auditActor";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applicationDisplayName": n => { this.applicationDisplayName = n.getStringValue(); },
            "applicationId": n => { this.applicationId = n.getStringValue(); },
            "auditActorType": n => { this.auditActorType = n.getStringValue(); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "servicePrincipalName": n => { this.servicePrincipalName = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPermissions": n => { this.userPermissions = n.getCollectionOfPrimitiveValues<string>(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the ipAddress property value. IPAddress.
     * @returns a string
     */
    public get ipAddress() {
        return this._ipAddress;
    };
    /**
     * Sets the ipAddress property value. IPAddress.
     * @param value Value to set for the ipAddress property.
     */
    public set ipAddress(value: string | undefined) {
        this._ipAddress = value;
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
        writer.writeStringValue("applicationDisplayName", this.applicationDisplayName);
        writer.writeStringValue("applicationId", this.applicationId);
        writer.writeStringValue("auditActorType", this.auditActorType);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("servicePrincipalName", this.servicePrincipalName);
        writer.writeStringValue("userId", this.userId);
        writer.writeCollectionOfPrimitiveValues<string>("userPermissions", this.userPermissions);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the servicePrincipalName property value. Service Principal Name (SPN).
     * @returns a string
     */
    public get servicePrincipalName() {
        return this._servicePrincipalName;
    };
    /**
     * Sets the servicePrincipalName property value. Service Principal Name (SPN).
     * @param value Value to set for the servicePrincipalName property.
     */
    public set servicePrincipalName(value: string | undefined) {
        this._servicePrincipalName = value;
    };
    /**
     * Gets the userId property value. User Id.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. User Id.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the userPermissions property value. List of user permissions when the audit was performed.
     * @returns a string
     */
    public get userPermissions() {
        return this._userPermissions;
    };
    /**
     * Sets the userPermissions property value. List of user permissions when the audit was performed.
     * @param value Value to set for the userPermissions property.
     */
    public set userPermissions(value: string[] | undefined) {
        this._userPermissions = value;
    };
    /**
     * Gets the userPrincipalName property value. User Principal Name (UPN).
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. User Principal Name (UPN).
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
