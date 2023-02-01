import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {createPrintUsageByUserFromDiscriminatorValue} from './createPrintUsageByUserFromDiscriminatorValue';
import {createSecurityReportsRootFromDiscriminatorValue} from './createSecurityReportsRootFromDiscriminatorValue';
import {PrintUsageByPrinter, PrintUsageByUser, SecurityReportsRoot} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReportRoot implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The dailyPrintUsageByPrinter property */
    private _dailyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /** The dailyPrintUsageByUser property */
    private _dailyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /** The monthlyPrintUsageByPrinter property */
    private _monthlyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /** The monthlyPrintUsageByUser property */
    private _monthlyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The security property */
    private _security?: SecurityReportsRoot | undefined;
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
     * Instantiates a new ReportRoot and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the dailyPrintUsageByPrinter property value. The dailyPrintUsageByPrinter property
     * @returns a printUsageByPrinter
     */
    public get dailyPrintUsageByPrinter() {
        return this._dailyPrintUsageByPrinter;
    };
    /**
     * Sets the dailyPrintUsageByPrinter property value. The dailyPrintUsageByPrinter property
     * @param value Value to set for the dailyPrintUsageByPrinter property.
     */
    public set dailyPrintUsageByPrinter(value: PrintUsageByPrinter[] | undefined) {
        this._dailyPrintUsageByPrinter = value;
    };
    /**
     * Gets the dailyPrintUsageByUser property value. The dailyPrintUsageByUser property
     * @returns a printUsageByUser
     */
    public get dailyPrintUsageByUser() {
        return this._dailyPrintUsageByUser;
    };
    /**
     * Sets the dailyPrintUsageByUser property value. The dailyPrintUsageByUser property
     * @param value Value to set for the dailyPrintUsageByUser property.
     */
    public set dailyPrintUsageByUser(value: PrintUsageByUser[] | undefined) {
        this._dailyPrintUsageByUser = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dailyPrintUsageByPrinter": n => { this.dailyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinter>(createPrintUsageByPrinterFromDiscriminatorValue); },
            "dailyPrintUsageByUser": n => { this.dailyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUser>(createPrintUsageByUserFromDiscriminatorValue); },
            "monthlyPrintUsageByPrinter": n => { this.monthlyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinter>(createPrintUsageByPrinterFromDiscriminatorValue); },
            "monthlyPrintUsageByUser": n => { this.monthlyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUser>(createPrintUsageByUserFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "security": n => { this.security = n.getObjectValue<SecurityReportsRoot>(createSecurityReportsRootFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the monthlyPrintUsageByPrinter property value. The monthlyPrintUsageByPrinter property
     * @returns a printUsageByPrinter
     */
    public get monthlyPrintUsageByPrinter() {
        return this._monthlyPrintUsageByPrinter;
    };
    /**
     * Sets the monthlyPrintUsageByPrinter property value. The monthlyPrintUsageByPrinter property
     * @param value Value to set for the monthlyPrintUsageByPrinter property.
     */
    public set monthlyPrintUsageByPrinter(value: PrintUsageByPrinter[] | undefined) {
        this._monthlyPrintUsageByPrinter = value;
    };
    /**
     * Gets the monthlyPrintUsageByUser property value. The monthlyPrintUsageByUser property
     * @returns a printUsageByUser
     */
    public get monthlyPrintUsageByUser() {
        return this._monthlyPrintUsageByUser;
    };
    /**
     * Sets the monthlyPrintUsageByUser property value. The monthlyPrintUsageByUser property
     * @param value Value to set for the monthlyPrintUsageByUser property.
     */
    public set monthlyPrintUsageByUser(value: PrintUsageByUser[] | undefined) {
        this._monthlyPrintUsageByUser = value;
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
     * Gets the security property value. The security property
     * @returns a securityReportsRoot
     */
    public get security() {
        return this._security;
    };
    /**
     * Sets the security property value. The security property
     * @param value Value to set for the security property.
     */
    public set security(value: SecurityReportsRoot | undefined) {
        this._security = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("dailyPrintUsageByPrinter", this.dailyPrintUsageByPrinter);
        writer.writeCollectionOfObjectValues<PrintUsageByUser>("dailyPrintUsageByUser", this.dailyPrintUsageByUser);
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("monthlyPrintUsageByPrinter", this.monthlyPrintUsageByPrinter);
        writer.writeCollectionOfObjectValues<PrintUsageByUser>("monthlyPrintUsageByUser", this.monthlyPrintUsageByUser);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<SecurityReportsRoot>("security", this.security);
        writer.writeAdditionalData(this.additionalData);
    };
}
