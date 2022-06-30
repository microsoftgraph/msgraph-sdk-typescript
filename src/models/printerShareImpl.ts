import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {Group} from './group';
import {GroupImpl, PrinterBaseImpl, PrinterImpl, UserImpl} from './index';
import {Printer} from './printer';
import {PrinterShare} from './printerShare';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrinterShareImpl extends PrinterBaseImpl implements PrinterShare {
    /** If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties. */
    private _allowAllUsers?: boolean | undefined;
    /** The groups whose users have access to print using the printer. */
    private _allowedGroups?: Group[] | undefined;
    /** The users who have access to print using the printer. */
    private _allowedUsers?: User[] | undefined;
    /** The DateTimeOffset when the printer share was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The printer that this printer share is related to. */
    private _printer?: Printer | undefined;
    /**
     * Gets the allowAllUsers property value. If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties.
     * @returns a boolean
     */
    public get allowAllUsers() {
        return this._allowAllUsers;
    };
    /**
     * Sets the allowAllUsers property value. If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties.
     * @param value Value to set for the allowAllUsers property.
     */
    public set allowAllUsers(value: boolean | undefined) {
        if(value) {
            this._allowAllUsers = value;
        }
    };
    /**
     * Gets the allowedGroups property value. The groups whose users have access to print using the printer.
     * @returns a GroupInterface
     */
    public get allowedGroups() {
        return this._allowedGroups;
    };
    /**
     * Sets the allowedGroups property value. The groups whose users have access to print using the printer.
     * @param value Value to set for the allowedGroups property.
     */
    public set allowedGroups(value: Group[] | undefined) {
        if(value) {
            const allowedGroupsArrValue: GroupImpl[] = [];
            this.allowedGroups?.forEach(element => {
                allowedGroupsArrValue.push((element instanceof GroupImpl? element:new GroupImpl(element)));
            });
            this._allowedGroups = allowedGroupsArrValue;
        }
    };
    /**
     * Gets the allowedUsers property value. The users who have access to print using the printer.
     * @returns a UserInterface
     */
    public get allowedUsers() {
        return this._allowedUsers;
    };
    /**
     * Sets the allowedUsers property value. The users who have access to print using the printer.
     * @param value Value to set for the allowedUsers property.
     */
    public set allowedUsers(value: User[] | undefined) {
        if(value) {
            const allowedUsersArrValue: UserImpl[] = [];
            this.allowedUsers?.forEach(element => {
                allowedUsersArrValue.push((element instanceof UserImpl? element:new UserImpl(element)));
            });
            this._allowedUsers = allowedUsersArrValue;
        }
    };
    /**
     * Instantiates a new printerShare and sets the default values.
     * @param printerShareParameterValue 
     */
    public constructor(printerShareParameterValue?: PrinterShare | undefined) {
        super(printerShareParameterValue);
        this._allowAllUsers = printerShareParameterValue?.allowAllUsers;
        this._allowedGroups = printerShareParameterValue?.allowedGroups;
        this._allowedUsers = printerShareParameterValue?.allowedUsers;
        this._createdDateTime = printerShareParameterValue?.createdDateTime;
        this._printer = printerShareParameterValue?.printer;
    };
    /**
     * Gets the createdDateTime property value. The DateTimeOffset when the printer share was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The DateTimeOffset when the printer share was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowAllUsers": n => { this.allowAllUsers = n.getBooleanValue(); },
            "allowedGroups": n => { this.allowedGroups = n.getCollectionOfObjectValues<GroupImpl>(createGroupFromDiscriminatorValue); },
            "allowedUsers": n => { this.allowedUsers = n.getCollectionOfObjectValues<UserImpl>(createUserFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "printer": n => { this.printer = n.getObjectValue<PrinterImpl>(createPrinterFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the printer property value. The printer that this printer share is related to.
     * @returns a PrinterInterface
     */
    public get printer() {
        return this._printer;
    };
    /**
     * Sets the printer property value. The printer that this printer share is related to.
     * @param value Value to set for the printer property.
     */
    public set printer(value: Printer | undefined) {
        if(value) {
            this._printer = value instanceof PrinterImpl? value : new PrinterImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowAllUsers){
            writer.writeBooleanValue("allowAllUsers", this.allowAllUsers);
        }
        if(this.allowedGroups && this.allowedGroups.length != 0){        const allowedGroupsArrValue: GroupImpl[] = [];
        this.allowedGroups?.forEach(element => {
            allowedGroupsArrValue.push((element instanceof GroupImpl? element:new GroupImpl(element)));
        });
            writer.writeCollectionOfObjectValues<GroupImpl>("allowedGroups", allowedGroupsArrValue);
        }
        if(this.allowedUsers && this.allowedUsers.length != 0){        const allowedUsersArrValue: UserImpl[] = [];
        this.allowedUsers?.forEach(element => {
            allowedUsersArrValue.push((element instanceof UserImpl? element:new UserImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserImpl>("allowedUsers", allowedUsersArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.printer){
            writer.writeObjectValue<PrinterImpl>("printer", (!this.printer || this.printer instanceof PrinterImpl? this.printer : new PrinterImpl(this.printer)));
        }
    };
}
