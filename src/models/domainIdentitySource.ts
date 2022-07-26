import {IdentitySource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainIdentitySource extends IdentitySource implements Parsable {
    /** The name of the identity source, typically also the domain name. Read only. */
    private _displayName?: string | undefined;
    /** The domain name. Read only. */
    private _domainName?: string | undefined;
    /**
     * Instantiates a new DomainIdentitySource and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.domainIdentitySource";
    };
    /**
     * Gets the displayName property value. The name of the identity source, typically also the domain name. Read only.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the identity source, typically also the domain name. Read only.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the domainName property value. The domain name. Read only.
     * @returns a string
     */
    public get domainName() {
        return this._domainName;
    };
    /**
     * Sets the domainName property value. The domain name. Read only.
     * @param value Value to set for the domainName property.
     */
    public set domainName(value: string | undefined) {
        this._domainName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "domainName": n => { this.domainName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("domainName", this.domainName);
    };
}
