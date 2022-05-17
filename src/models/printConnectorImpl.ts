import {createPrinterLocationFromDiscriminatorValue} from './createPrinterLocationFromDiscriminatorValue';
import {EntityImpl, PrinterLocationImpl} from './index';
import {PrintConnector} from './printConnector';
import {PrinterLocation} from './printerLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintConnectorImpl extends EntityImpl implements Parsable, PrintConnector {
    /** The connector's version. */
    appVersion?: string | undefined;
    /** The name of the connector. */
    displayName?: string | undefined;
    /** The connector machine's hostname. */
    fullyQualifiedDomainName?: string | undefined;
    /** The physical and/or organizational location of the connector. */
    location?: PrinterLocation | undefined;
    /** The connector machine's operating system version. */
    operatingSystem?: string | undefined;
    /** The DateTimeOffset when the connector was registered. */
    registeredDateTime?: Date | undefined;
    /**
     * Instantiates a new printConnector and sets the default values.
     * @param printConnectorParameterValue 
     */
    public constructor(printConnectorParameterValue?: PrintConnector | undefined) {
        super();
        this.appVersion = printConnectorParameterValue?.appVersion ;
        this.displayName = printConnectorParameterValue?.displayName ;
        this.fullyQualifiedDomainName = printConnectorParameterValue?.fullyQualifiedDomainName ;
        this.location = printConnectorParameterValue?.location ;
        this.operatingSystem = printConnectorParameterValue?.operatingSystem ;
        this.registeredDateTime = printConnectorParameterValue?.registeredDateTime ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appVersion){
        if(this.appVersion)
        writer.writeStringValue("appVersion", this.appVersion);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.fullyQualifiedDomainName){
        if(this.fullyQualifiedDomainName)
        writer.writeStringValue("fullyQualifiedDomainName", this.fullyQualifiedDomainName);
        }
        if(this.location){
        if(this.location)
        writer.writeObjectValue<PrinterLocationImpl>("location", new PrinterLocationImpl(this.location));
        }
        if(this.operatingSystem){
        if(this.operatingSystem)
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        }
        if(this.registeredDateTime){
        if(this.registeredDateTime)
        writer.writeDateValue("registeredDateTime", this.registeredDateTime);
        }
    };
}
