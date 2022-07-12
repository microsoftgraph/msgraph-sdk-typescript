import {DomainDnsRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsMxRecord extends DomainDnsRecord implements Parsable {
    /** Value used when configuring the answer/destination/value of the MX record at the DNS host. */
    private _mailExchange?: string | undefined;
    /** Value used when configuring the Preference/Priority property of the MX record at the DNS host. */
    private _preference?: number | undefined;
    /**
     * Instantiates a new DomainDnsMxRecord and sets the default values.
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
            "mailExchange": n => { this.mailExchange = n.getStringValue(); },
            "preference": n => { this.preference = n.getNumberValue(); },
        };
    };
    /**
     * Gets the mailExchange property value. Value used when configuring the answer/destination/value of the MX record at the DNS host.
     * @returns a string
     */
    public get mailExchange() {
        return this._mailExchange;
    };
    /**
     * Sets the mailExchange property value. Value used when configuring the answer/destination/value of the MX record at the DNS host.
     * @param value Value to set for the mailExchange property.
     */
    public set mailExchange(value: string | undefined) {
        this._mailExchange = value;
    };
    /**
     * Gets the preference property value. Value used when configuring the Preference/Priority property of the MX record at the DNS host.
     * @returns a integer
     */
    public get preference() {
        return this._preference;
    };
    /**
     * Sets the preference property value. Value used when configuring the Preference/Priority property of the MX record at the DNS host.
     * @param value Value to set for the preference property.
     */
    public set preference(value: number | undefined) {
        this._preference = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("mailExchange", this.mailExchange);
        writer.writeNumberValue("preference", this.preference);
    };
}
