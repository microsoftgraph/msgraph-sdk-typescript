import {DomainDnsRecord} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DomainDnsSrvRecord extends DomainDnsRecord implements Parsable {
    /** Value to use when configuring the Target property of the SRV record at the DNS host. */
    private _nameTarget?: string | undefined;
    /** Value to use when configuring the port property of the SRV record at the DNS host. */
    private _port?: number | undefined;
    /** Value to use when configuring the priority property of the SRV record at the DNS host. */
    private _priority?: number | undefined;
    /** Value to use when configuring the protocol property of the SRV record at the DNS host. */
    private _protocol?: string | undefined;
    /** Value to use when configuring the service property of the SRV record at the DNS host. */
    private _service?: string | undefined;
    /** Value to use when configuring the weight property of the SRV record at the DNS host. */
    private _weight?: number | undefined;
    /**
     * Instantiates a new DomainDnsSrvRecord and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.domainDnsSrvRecord";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "nameTarget": n => { this.nameTarget = n.getStringValue(); },
            "port": n => { this.port = n.getNumberValue(); },
            "priority": n => { this.priority = n.getNumberValue(); },
            "protocol": n => { this.protocol = n.getStringValue(); },
            "service": n => { this.service = n.getStringValue(); },
            "weight": n => { this.weight = n.getNumberValue(); },
        };
    };
    /**
     * Gets the nameTarget property value. Value to use when configuring the Target property of the SRV record at the DNS host.
     * @returns a string
     */
    public get nameTarget() {
        return this._nameTarget;
    };
    /**
     * Sets the nameTarget property value. Value to use when configuring the Target property of the SRV record at the DNS host.
     * @param value Value to set for the nameTarget property.
     */
    public set nameTarget(value: string | undefined) {
        this._nameTarget = value;
    };
    /**
     * Gets the port property value. Value to use when configuring the port property of the SRV record at the DNS host.
     * @returns a integer
     */
    public get port() {
        return this._port;
    };
    /**
     * Sets the port property value. Value to use when configuring the port property of the SRV record at the DNS host.
     * @param value Value to set for the port property.
     */
    public set port(value: number | undefined) {
        this._port = value;
    };
    /**
     * Gets the priority property value. Value to use when configuring the priority property of the SRV record at the DNS host.
     * @returns a integer
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Sets the priority property value. Value to use when configuring the priority property of the SRV record at the DNS host.
     * @param value Value to set for the priority property.
     */
    public set priority(value: number | undefined) {
        this._priority = value;
    };
    /**
     * Gets the protocol property value. Value to use when configuring the protocol property of the SRV record at the DNS host.
     * @returns a string
     */
    public get protocol() {
        return this._protocol;
    };
    /**
     * Sets the protocol property value. Value to use when configuring the protocol property of the SRV record at the DNS host.
     * @param value Value to set for the protocol property.
     */
    public set protocol(value: string | undefined) {
        this._protocol = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("nameTarget", this.nameTarget);
        writer.writeNumberValue("port", this.port);
        writer.writeNumberValue("priority", this.priority);
        writer.writeStringValue("protocol", this.protocol);
        writer.writeStringValue("service", this.service);
        writer.writeNumberValue("weight", this.weight);
    };
    /**
     * Gets the service property value. Value to use when configuring the service property of the SRV record at the DNS host.
     * @returns a string
     */
    public get service() {
        return this._service;
    };
    /**
     * Sets the service property value. Value to use when configuring the service property of the SRV record at the DNS host.
     * @param value Value to set for the service property.
     */
    public set service(value: string | undefined) {
        this._service = value;
    };
    /**
     * Gets the weight property value. Value to use when configuring the weight property of the SRV record at the DNS host.
     * @returns a integer
     */
    public get weight() {
        return this._weight;
    };
    /**
     * Sets the weight property value. Value to use when configuring the weight property of the SRV record at the DNS host.
     * @param value Value to set for the weight property.
     */
    public set weight(value: number | undefined) {
        this._weight = value;
    };
}
