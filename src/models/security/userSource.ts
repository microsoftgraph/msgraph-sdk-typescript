import {DataSource} from './index';
import {SourceType} from './sourceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserSource extends DataSource implements Parsable {
    /** Email address of the user's mailbox. */
    private _email?: string | undefined;
    /** Specifies which sources are included in this group. Possible values are: mailbox, site. */
    private _includedSources?: SourceType | undefined;
    /** The URL of the user's OneDrive for Business site. Read-only. */
    private _siteWebUrl?: string | undefined;
    /**
     * Instantiates a new UserSource and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.security.userSource";
    };
    /**
     * Gets the email property value. Email address of the user's mailbox.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. Email address of the user's mailbox.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "email": n => { this.email = n.getStringValue(); },
            "includedSources": n => { this.includedSources = n.getEnumValue<SourceType>(SourceType); },
            "siteWebUrl": n => { this.siteWebUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the includedSources property value. Specifies which sources are included in this group. Possible values are: mailbox, site.
     * @returns a sourceType
     */
    public get includedSources() {
        return this._includedSources;
    };
    /**
     * Sets the includedSources property value. Specifies which sources are included in this group. Possible values are: mailbox, site.
     * @param value Value to set for the includedSources property.
     */
    public set includedSources(value: SourceType | undefined) {
        this._includedSources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("email", this.email);
        writer.writeEnumValue<SourceType>("includedSources", this.includedSources);
        writer.writeStringValue("siteWebUrl", this.siteWebUrl);
    };
    /**
     * Gets the siteWebUrl property value. The URL of the user's OneDrive for Business site. Read-only.
     * @returns a string
     */
    public get siteWebUrl() {
        return this._siteWebUrl;
    };
    /**
     * Sets the siteWebUrl property value. The URL of the user's OneDrive for Business site. Read-only.
     * @param value Value to set for the siteWebUrl property.
     */
    public set siteWebUrl(value: string | undefined) {
        this._siteWebUrl = value;
    };
}
