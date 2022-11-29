import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class DomainDnsRecord extends Entity implements Parsable {
    /** If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain. */
    private _isOptional?: boolean | undefined;
    /** Value used when configuring the name of the DNS record at the DNS host. */
    private _label?: string | undefined;
    /** Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, Txt. */
    private _recordType?: string | undefined;
    /** Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune. */
    private _supportedService?: string | undefined;
    /** Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable. */
    private _ttl?: number | undefined;
    /**
     * Instantiates a new domainDnsRecord and sets the default values.
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
            "isOptional": n => { this.isOptional = n.getBooleanValue(); },
            "label": n => { this.label = n.getStringValue(); },
            "recordType": n => { this.recordType = n.getStringValue(); },
            "supportedService": n => { this.supportedService = n.getStringValue(); },
            "ttl": n => { this.ttl = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isOptional property value. If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain.
     * @returns a boolean
     */
    public get isOptional() {
        return this._isOptional;
    };
    /**
     * Sets the isOptional property value. If false, this record must be configured by the customer at the DNS host for Microsoft Online Services to operate correctly with the domain.
     * @param value Value to set for the isOptional property.
     */
    public set isOptional(value: boolean | undefined) {
        this._isOptional = value;
    };
    /**
     * Gets the label property value. Value used when configuring the name of the DNS record at the DNS host.
     * @returns a string
     */
    public get label() {
        return this._label;
    };
    /**
     * Sets the label property value. Value used when configuring the name of the DNS record at the DNS host.
     * @param value Value to set for the label property.
     */
    public set label(value: string | undefined) {
        this._label = value;
    };
    /**
     * Gets the recordType property value. Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, Txt.
     * @returns a string
     */
    public get recordType() {
        return this._recordType;
    };
    /**
     * Sets the recordType property value. Indicates what type of DNS record this entity represents.The value can be one of the following: CName, Mx, Srv, Txt.
     * @param value Value to set for the recordType property.
     */
    public set recordType(value: string | undefined) {
        this._recordType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isOptional", this.isOptional);
        writer.writeStringValue("label", this.label);
        writer.writeStringValue("recordType", this.recordType);
        writer.writeStringValue("supportedService", this.supportedService);
        writer.writeNumberValue("ttl", this.ttl);
    };
    /**
     * Gets the supportedService property value. Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune.
     * @returns a string
     */
    public get supportedService() {
        return this._supportedService;
    };
    /**
     * Sets the supportedService property value. Microsoft Online Service or feature that has a dependency on this DNS record.Can be one of the following values: null, Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline, SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune.
     * @param value Value to set for the supportedService property.
     */
    public set supportedService(value: string | undefined) {
        this._supportedService = value;
    };
    /**
     * Gets the ttl property value. Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable.
     * @returns a integer
     */
    public get ttl() {
        return this._ttl;
    };
    /**
     * Sets the ttl property value. Value to use when configuring the time-to-live (ttl) property of the DNS record at the DNS host. Not nullable.
     * @param value Value to set for the ttl property.
     */
    public set ttl(value: number | undefined) {
        this._ttl = value;
    };
}
