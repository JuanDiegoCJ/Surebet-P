import * as $protobuf from "protobufjs";
/** Namespace surebet. */
export namespace surebet {

    /** Properties of a SurebetItem. */
    interface ISurebetItem {

        /** SurebetItem typesurebet */
        typesurebet?: (string|null);

        /** SurebetItem arbprofit */
        arbprofit?: (string|null);

        /** SurebetItem middle */
        middle?: (string|null);

        /** SurebetItem sportname */
        sportname?: (string|null);

        /** SurebetItem fulltime */
        fulltime?: (string|null);

        /** SurebetItem arbgenerationtime */
        arbgenerationtime?: (string|null);

        /** SurebetItem bookmaker */
        bookmaker?: (string|null);

        /** SurebetItem currentscore */
        currentscore?: (string|null);

        /** SurebetItem eventname */
        eventname?: (string|null);

        /** SurebetItem eventstarttime */
        eventstarttime?: (string|null);

        /** SurebetItem leaguename */
        leaguename?: (string|null);

        /** SurebetItem arboutcome */
        arboutcome?: (string|null);

        /** SurebetItem directionodd */
        directionodd?: (string|null);

        /** SurebetItem odd */
        odd?: (string|null);

        /** SurebetItem gamescore */
        gamescore?: (string|null);

        /** SurebetItem currencyodd */
        currencyodd?: (string|null);

        /** SurebetItem created */
        created?: (string|null);

        /** SurebetItem createddate */
        createddate?: (string|null);

        /** SurebetItem arbid */
        arbid?: (string|null);

        /** SurebetItem eventid */
        eventid?: (string|null);

        /** SurebetItem section */
        section?: (string|null);

        /** SurebetItem color */
        color?: (string|null);

        /** SurebetItem wrongitem */
        wrongitem?: (string|null);

        /** SurebetItem clon */
        clon?: (string|null);

        /** SurebetItem origen */
        origen?: (string|null);

        /** SurebetItem tipo */
        tipo?: (string|null);

        /** SurebetItem link */
        link?: (string|null);

        /** SurebetItem funds */
        funds?: (string|null);
    }

    /** Represents a SurebetItem. */
    class SurebetItem implements ISurebetItem {

        /**
         * Constructs a new SurebetItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: surebet.ISurebetItem);

        /** SurebetItem typesurebet. */
        public typesurebet: string;

        /** SurebetItem arbprofit. */
        public arbprofit: string;

        /** SurebetItem middle. */
        public middle: string;

        /** SurebetItem sportname. */
        public sportname: string;

        /** SurebetItem fulltime. */
        public fulltime: string;

        /** SurebetItem arbgenerationtime. */
        public arbgenerationtime: string;

        /** SurebetItem bookmaker. */
        public bookmaker: string;

        /** SurebetItem currentscore. */
        public currentscore: string;

        /** SurebetItem eventname. */
        public eventname: string;

        /** SurebetItem eventstarttime. */
        public eventstarttime: string;

        /** SurebetItem leaguename. */
        public leaguename: string;

        /** SurebetItem arboutcome. */
        public arboutcome: string;

        /** SurebetItem directionodd. */
        public directionodd: string;

        /** SurebetItem odd. */
        public odd: string;

        /** SurebetItem gamescore. */
        public gamescore: string;

        /** SurebetItem currencyodd. */
        public currencyodd: string;

        /** SurebetItem created. */
        public created: string;

        /** SurebetItem createddate. */
        public createddate: string;

        /** SurebetItem arbid. */
        public arbid: string;

        /** SurebetItem eventid. */
        public eventid: string;

        /** SurebetItem section. */
        public section: string;

        /** SurebetItem color. */
        public color: string;

        /** SurebetItem wrongitem. */
        public wrongitem: string;

        /** SurebetItem clon. */
        public clon: string;

        /** SurebetItem origen. */
        public origen: string;

        /** SurebetItem tipo. */
        public tipo: string;

        /** SurebetItem link. */
        public link: string;

        /** SurebetItem funds. */
        public funds: string;

        /**
         * Creates a new SurebetItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SurebetItem instance
         */
        public static create(properties?: surebet.ISurebetItem): surebet.SurebetItem;

        /**
         * Encodes the specified SurebetItem message. Does not implicitly {@link surebet.SurebetItem.verify|verify} messages.
         * @param message SurebetItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: surebet.ISurebetItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SurebetItem message, length delimited. Does not implicitly {@link surebet.SurebetItem.verify|verify} messages.
         * @param message SurebetItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: surebet.ISurebetItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SurebetItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SurebetItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): surebet.SurebetItem;

        /**
         * Decodes a SurebetItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SurebetItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): surebet.SurebetItem;

        /**
         * Verifies a SurebetItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SurebetItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SurebetItem
         */
        public static fromObject(object: { [k: string]: any }): surebet.SurebetItem;

        /**
         * Creates a plain object from a SurebetItem message. Also converts values to other types if specified.
         * @param message SurebetItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: surebet.SurebetItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SurebetItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SurebetList. */
    interface ISurebetList {

        /** SurebetList items */
        items?: (surebet.ISurebetItem[]|null);

        /** SurebetList totalcount */
        totalcount?: (number|null);
    }

    /** Represents a SurebetList. */
    class SurebetList implements ISurebetList {

        /**
         * Constructs a new SurebetList.
         * @param [properties] Properties to set
         */
        constructor(properties?: surebet.ISurebetList);

        /** SurebetList items. */
        public items: surebet.ISurebetItem[];

        /** SurebetList totalcount. */
        public totalcount: number;

        /**
         * Creates a new SurebetList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SurebetList instance
         */
        public static create(properties?: surebet.ISurebetList): surebet.SurebetList;

        /**
         * Encodes the specified SurebetList message. Does not implicitly {@link surebet.SurebetList.verify|verify} messages.
         * @param message SurebetList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: surebet.ISurebetList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SurebetList message, length delimited. Does not implicitly {@link surebet.SurebetList.verify|verify} messages.
         * @param message SurebetList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: surebet.ISurebetList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SurebetList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SurebetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): surebet.SurebetList;

        /**
         * Decodes a SurebetList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SurebetList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): surebet.SurebetList;

        /**
         * Verifies a SurebetList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SurebetList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SurebetList
         */
        public static fromObject(object: { [k: string]: any }): surebet.SurebetList;

        /**
         * Creates a plain object from a SurebetList message. Also converts values to other types if specified.
         * @param message SurebetList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: surebet.SurebetList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SurebetList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
