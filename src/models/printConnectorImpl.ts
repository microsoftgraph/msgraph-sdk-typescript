import {createPrinterLocationFromDiscriminatorValue} from './createPrinterLocationFromDiscriminatorValue';
import {EntityImpl, PrinterLocationImpl} from './index';
import {PrintConnector} from './printConnector';
import {PrinterLocation} from './printerLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintConnectorImpl extends EntityImpl implements PrintConnector {
    /** The connector's version. */
    private _appVersion?: string | undefined;
    /** The name of the connector. */
    private _displayName?: string | undefined;
    /** The connector machine's hostname. */
    private _fullyQualifiedDomainName?: string | undefined;
    /** The physical and/or organizational location of the connector. */
    private _location?: PrinterLocation | undefined;
    /** The connector machine's operating system version. */
    private _operatingSystem?: string | undefined;
    /** The DateTimeOffset when the connector was registered. */
    private _registeredDateTime?: Date | undefined;
    /**
     * Gets the appVersion property value. The connector's version.
     * @returns a string
     */
    public get appVersion() {
        return this._appVersion;
    };
    /**
     * Sets the appVersion property value. The connector's version.
     * @param value Value to set for the appVersion property.
     */
    public set appVersion(value: string | undefined) {
        if(value) {
            this._appVersion = value;
        }
    };
    /**
     * Instantiates a new printConnector and sets the default values.
     * @param printConnectorParameterValue 
     */
    public constructor(printConnectorParameterValue?: PrintConnector | undefined) {
        super(printConnectorParameterValue);
        this._appVersion = printConnectorParameterValue?.appVersion;
        this._displayName = printConnectorParameterValue?.displayName;
        this._fullyQualifiedDomainName = printConnectorParameterValue?.fullyQualifiedDomainName;
        this._location = printConnectorParameterValue?.location;
        this._operatingSystem = printConnectorParameterValue?.operatingSystem;
        this._registeredDateTime = printConnectorParameterValue?.registeredDateTime;
    };
    /**
     * Gets the displayName property value. The name of the connector.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the connector.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the fullyQualifiedDomainName property value. The connector machine's hostname.
     * @returns a string
     */
    public get fullyQualifiedDomainName() {
        return this._fullyQualifiedDomainName;
    };
    /**
     * Sets the fullyQualifiedDomainName property value. The connector machine's hostname.
     * @param value Value to set for the fullyQualifiedDomainName property.
     */
    public set fullyQualifiedDomainName(value: string | undefined) {
        if(value) {
            this._fullyQualifiedDomainName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appVersion": n => { this.appVersion = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "fullyQualifiedDomainName": n => { this.fullyQualifiedDomainName = n.getStringValue(); },
            "location": n => { this.location = n.getObjectValue<PrinterLocationImpl>(createPrinterLocationFromDiscriminatorValue); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "registeredDateTime": n => { this.registeredDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the location property value. The physical and/or organizational location of the connector.
     * @returns a PrinterLocationInterface
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The physical and/or organizational location of the connector.
     * @param value Value to set for the location property.
     */
    public set location(value: PrinterLocation | undefined) {
        if(value) {
            this._location = value instanceof PrinterLocationImpl? value as PrinterLocationImpl: new PrinterLocationImpl(value);
        }
    };
    /**
     * Gets the operatingSystem property value. The connector machine's operating system version.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. The connector machine's operating system version.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        if(value) {
            this._operatingSystem = value;
        }
    };
    /**
     * Gets the registeredDateTime property value. The DateTimeOffset when the connector was registered.
     * @returns a Date
     */
    public get registeredDateTime() {
        return this._registeredDateTime;
    };
    /**
     * Sets the registeredDateTime property value. The DateTimeOffset when the connector was registered.
     * @param value Value to set for the registeredDateTime property.
     */
    public set registeredDateTime(value: Date | undefined) {
        if(value) {
            this._registeredDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appVersion){
            writer.writeStringValue("appVersion", this.appVersion);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.fullyQualifiedDomainName){
            writer.writeStringValue("fullyQualifiedDomainName", this.fullyQualifiedDomainName);
        }
        if(this.location){
            writer.writeObjectValue<PrinterLocationImpl>("location", (this.location instanceof PrinterLocationImpl? this.location as PrinterLocationImpl: new PrinterLocationImpl(this.location)));
        }
        if(this.operatingSystem){
            writer.writeStringValue("operatingSystem", this.operatingSystem);
        }
        if(this.registeredDateTime){
            writer.writeDateValue("registeredDateTime", this.registeredDateTime);
        }
    };
}
