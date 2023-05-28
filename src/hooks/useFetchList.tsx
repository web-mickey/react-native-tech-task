import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiBaseUrl } from "../constants";

const getList = () =>
  axios.get(`${apiBaseUrl}/pokemon?limit=300`).then((res) => res.data);

const useFetchList = () =>
  useQuery({
    queryKey: ["pokemons"],
    queryFn: getList,
  });

export default useFetchList;
